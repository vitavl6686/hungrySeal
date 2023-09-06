import React from 'react';
import { Image, StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import { withNavigation } from 'react-navigation';
const ResultDetail = ({id, name, rating, review, pic, navigation}) => {
    return(
        <TouchableOpacity
            onPress={() => {
                navigation.navigate('Result', {id: id});
            }}>
        <View style={styles.view}>
            <Image
                style = {styles.image}
                source = {{uri: pic}} />
            <Text style = {styles.name}>{name}</Text>
            <Text>{rating} Stars, {review} Reviews </Text>
        </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    image: {
        width: 270,
        height: 230,
        borderRadius: 5,
    },
    view: {
        borderWidth: 1,
        borderBottomWidth: 0,
        borderTopWidth: 0,
        margin: 1,
        borderColor: 'rgb(201, 204, 209)'
    },
    name: {
        fontSize: 20,
        color: 'rgb(7, 37, 82)'
    }
});

export default withNavigation(ResultDetail);