import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, FlatList, Image, TouchableOpacity} from 'react-native';
import yelp from '../../api/yelp';
import {Linking} from 'react-native'


const ResultsShowScreen = ({ navigation }) => {
    const id = navigation.getParam('id');
    const [details, setDetails] = useState(null);

    const getResult = async (id) => {
        const responce = await yelp.get(`/${id}`);
        setDetails(responce.data);
    }

    useEffect(() => {
        getResult(id);
    }, []);

    console.log(details);

    if (!details) {
        return null;
    }

    return(
        <View>
            <Text style = {styles.name}>{details.name}</Text>
            
            <View style = {styles.view}>
            <Image
                source = {{uri: details.image_url}}
                style =  {styles.image}
            />
            </View>

            <View style = {styles.view}>
            <Text style = {styles.header}>Phone number:</Text>
            <TouchableOpacity
                onPress={() => {Linking.openURL(`tel:${details.phone}`)}}>
                    <Text style={styles.body}>{details.phone}</Text>
            </TouchableOpacity>
            </View>

            <View style = {styles.view}>
            <Text style={styles.header} >Category: </Text>
            <FlatList 
                data = {details.categories}
                renderItem={({item}) => {
                    return(<Text style={styles.body}>{item.title}</Text>)
                    }}
            />
            </View>

            <View style = {styles.view}>
            <Text style={styles.header} >Address: </Text>

            <TouchableOpacity
                onPress={() => {Linking.openURL()}}>
            <FlatList 
                data = {details.location.display_address}
                renderItem={({item}) => {
                    console.log(item);
                    return(<Text style={styles.body}>{item}</Text>)
                    }}
            />
            </TouchableOpacity>


            </View>

        </View>
    )
};

const styles = StyleSheet.create({
    name: {
        fontSize: 30,
    },
    header: {
        fontSize: 20, 
        fontWeight: 'bold'
    },
    body: {
        fontSize: 20
    },
    image: {
        height: 200,
        width: 300,
        marginVertical: 20
    },
    view: {
        margin: 15
    }
});

export default ResultsShowScreen;

