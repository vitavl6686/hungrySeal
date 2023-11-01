import React from "react";
import { StyleSheet, View, Image, ScrollView, FlatList } from "react-native";
import { NavigationStackProp } from "react-navigation-stack";

import { Text, ButtonGroup } from '@rneui/themed';

import PlaceDetails from "./placeDetails";
import { EateryInfo } from "../../hooks/useSearchResults";




const Block = ({name, data, navigation}: {name: string, data: Array<EateryInfo>, navigation: NavigationStackProp}) => {
    return(
        <View style = { styles.outer }>
            <View style = {styles.textblock}>
            <Text h4 style = { styles.blockName }>{ name }</Text>
            </View>

            <View style = { styles.block } >
                    <FlatList 
                        showsHorizontalScrollIndicator = {false}
                        horizontal
                        data={ data }
                        keyExtractor={(restaurant) => restaurant.id}
                        renderItem= {({item}) => {
                            return(
                                <View style = {{width: 300}}>
                                    <PlaceDetails data = { item } imageStyle = { styles.image } navigation = { navigation } />
                                </View>
                        );}}
                    />
            </View>

        </View>
    );
}

const styles = StyleSheet.create({
    outer: {
        marginVertical: 5,
    },

    blockName: {
        fontVariant: 'small-caps' as any ,
        letterSpacing: 0.2,
        fontSize: 20,
    },

    block: {
        margin: 2
    },

    textblock: {
        marginHorizontal: 8,
    },

    image: {
        height: 160,
        width: "100%",
        opacity: 0.8,
        borderRadius: 10,
        margin: 0
    }
})

export default Block;