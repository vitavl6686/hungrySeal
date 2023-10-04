import React from "react";
import { StyleSheet, View, FlatList } from "react-native";
import { NavigationStackProp } from "react-navigation-stack";

import { Text } from '@rneui/themed';

import { EateryInfo } from "../../hooks/useSearchResults";

import PlaceDetails from "../index/placeDetails";




const Block = ({name, data, navigation}: {name: string, data: Array<EateryInfo>, navigation: NavigationStackProp}) => {
    return(
        <View style = { styles.mainView }>

            <View style = { styles.textBlock }>
                <Text h4 style = { styles.name }> All results for "{ name }"</Text>
            </View>
            
            
            <FlatList 
                    showsVerticalScrollIndicator = { false }
                    data={ data }
                    keyExtractor={(restaurant) => restaurant.id}
                    renderItem= {({item}) => {
                        return(
                            <View style = { styles.placeView }>
                                <PlaceDetails data = {item} imageStyle={styles.image} navigation = { navigation } />
                            </View>
                    );}}
            />


        </View>
    );
}

const styles = StyleSheet.create({
    mainView: {
        flex: 1,
        backgroundColor: 'white'
    },

    name: {
        fontVariant: 'small-caps' as any ,
        letterSpacing: 0.2,
        fontSize: 25,
    },

    textBlock: {
        marginVertical: 10
    },

    placeView: {
        marginVertical: 4,
        borderRadius: 7
    },

    image: {
        height: 300,
        width: '100%',
        opacity: 0.8,
        borderRadius: 10,


    }
})

export default Block;