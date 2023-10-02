import React, { useEffect, useState } from "react";
import { NavigationStackProp } from "react-navigation-stack";
import { FlatList, View, StyleSheet } from "react-native";
import { Text, ButtonGroup } from '@rneui/themed';

import useSearchResults from "../hooks/useSearchResults";
import Block from "../components/index/block";
import PlaceDetails from "../components/index/placeDetails";


const GeneralSearchScreen = ({navigation}: {navigation: NavigationStackProp}) => {
    const general = navigation.getParam('found');
    const name = navigation.getParam('term');
    return(
        <View style = {{flex: 1}}>
            <Text h4>All results for: "{ name }"</Text>
            <FlatList 
                data={ general }
                keyExtractor={(restaurant) => restaurant.id}
                renderItem= {({item}) => {
                    return(
                        <View>
                            <PlaceDetails data = {item} />
                        </View>
                    );}}
             />
        </View>
    );

    
};




export default GeneralSearchScreen;