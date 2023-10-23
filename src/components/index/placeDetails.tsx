import React from 'react';
import { View, StyleSheet, Image, TouchableOpacity, FlatList } from 'react-native';
import { NavigationStackProp } from 'react-navigation-stack';
import StarRating from 'react-native-star-rating';





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
                        <StarRating 
                            rating = {data.rating}
                            disabled
                            starSize={30}
                        />
                        
                        <Text style = { styles.reviewDetails }>{ data.review_count} reviews</Text>
                        <Text style = { styles.distanceDetails}>{ data.distance.toFixed() } metres</Text>

                    </View>
                </View>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    outer: {
        margin: 6
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

    reviewDetails: {
        letterSpacing: 0.2,
        fontSize: 18,
        fontStyle: 'italic'
    },

    distanceDetails: {
        letterSpacing: 0.2,
        fontSize: 19,
        fontWeight: '700',
        fontStyle: 'italic'
    },

    placeName: {
        fontVariant: 'small-caps' as any ,
        letterSpacing: 0.2,
        fontSize: 20,
        fontWeight: '600',
        marginBottom: 10
    }
});

export default PlaceDetails;