import React from 'react';
import { View, StyleSheet, Image, TouchableOpacity, FlatList } from 'react-native';
import { NavigationStackProp } from 'react-navigation-stack';



import { Text } from '@rneui/themed';
import { EateryInfo } from '../../hooks/useSearchResults';


const PlaceDetails = ({data, imageStyle, navigation}: {data: EateryInfo, imageStyle: object, navigation: NavigationStackProp}) => {
    var displayed_name = "";
    if (data.name.length > 20) {displayed_name = data.name.substring(0, 17) + "..."} else {displayed_name = data.name};

    

    return(
        <View style={ styles.outer }>
            <TouchableOpacity
                onPress={() => navigation.navigate('place', {id: data.id})}>
                <View style = {[styles.mainContent, styles.elevation]}>
                    <Image
                        source = {{ uri: data.image_url }}
                        style = { imageStyle }
                    />
                    <View style = {styles.textView }>
                        <Text style = { styles.placeName }>{ displayed_name }</Text>

                        <Text style = { styles.details }>Rating: {data.rating}</Text>
                        <Text style = { styles.details }>Number of reviews: { data.review_count}</Text>
                        <Text>Distance: { data.coordinates.distance }</Text>
                    </View>
                </View>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    outer: {
        margin: 6,
    },

    mainContent: {
        width: '100%',
        marginHorizontal: 6,
        marginLeft: 0,
        backgroundColor: 'white',
        borderRadius: 10
        
    },

    elevation: {
        elevation: 5,
        shadowColor: 'black',
    },

    textView: {
        borderRadius: 10,
        margin: 5
    },

    placeName: {
        fontVariant: 'small-caps' as any ,
        letterSpacing: 0.2,
        fontSize: 18,
        fontWeight: '600'
    },

    details: {
        letterSpacing: 0.2,
        fontSize: 18,
    }
});

export default PlaceDetails;