import React from 'react';
import { View, StyleSheet, Image } from 'react-native';

import { Text, ButtonGroup } from '@rneui/themed';

const PlaceDetails = ({data}) => {
    return(
        <View style = {styles.mainFrame}>
            <Image
                source = {{uri: data.image_url}}
                style = {styles.image}
            />
            <Text style = { styles.placeName }>{ data.name}</Text>
            <Text style = { styles.details }>Rating: {data.rating}</Text>
            <Text style = { styles.details }>Number of reviews: { data.review_count}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    mainFrame: {
        width: 300,
        margin: 5,
        marginLeft: 0
    },

    image: {
        height: 160,
        width: 300,
        opacity: 0.8,
        borderRadius: 10
    },

    placeName: {
        fontVariant: 'small-caps' as any ,
        letterSpacing: 0.2,
        fontSize: 20,
        fontWeight: '600'
    },

    details: {
        
        letterSpacing: 0.2,
        fontSize: 18,
    }
});

export default PlaceDetails;