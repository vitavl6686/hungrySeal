import React from "react";
import { StyleSheet, View, Image, ScrollView } from "react-native";
import { Text, ButtonGroup } from '@rneui/themed';

import PlaceDetails from "./placeDetails";



const Block = ({name}) => {
    return(
        <View>
            <View style = {styles.block}>
            <Text h4 style = { styles.blockName }>{ name }</Text>
            </View>
            <View >
                <ScrollView horizontal>
                    <PlaceDetails name = "Grove road cafe" />
                    <PlaceDetails name = "Vita and Alex cafes" />
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