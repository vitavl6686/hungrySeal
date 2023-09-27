import React from 'react';
import { View, StyleSheet, Image } from 'react-native';

import { Text, ButtonGroup } from '@rneui/themed';

const PlaceDetails = ({name}) => {
    return(
        <View style = {styles.mainFrame}>
            <Image
                source = {require('../../../assets/test_image_1.jpeg')}
                style = {styles.image}
            />
            <Text style = { styles.placeName }>{ name }</Text>
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
    }
});

export default PlaceDetails;