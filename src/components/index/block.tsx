import React from "react";
import { StyleSheet, View, Image, ScrollView, FlatList } from "react-native";
import { Text, ButtonGroup } from '@rneui/themed';

import PlaceDetails from "./placeDetails";



const Block = ({name, data}) => {
    return(
        <View>
            <View style = {styles.block}>
            <Text h4 style = { styles.blockName }>{ name }</Text>
            </View>
            <View >
                <ScrollView horizontal>
                    <FlatList 
                        horizontal
                        data={ data }
                        keyExtractor={(restaurant) => restaurant.id}
                        renderItem= {({item}) => {
                            return(
                                <View>
                                    <PlaceDetails data = {item} />
                                </View>
                        );}}
                    
                    />
                   
                </ScrollView>
            </View>

        </View>
    );
}

const styles = StyleSheet.create({
    blockName: {
        fontVariant: 'small-caps' as any ,
        letterSpacing: 0.2,
        fontSize: 20,
    },
    block: {
        margin: 5
    }
})

export default Block;