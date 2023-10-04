import React, { useEffect, useState } from "react";
import { NavigationStackProp } from "react-navigation-stack";
import { FlatList, View, StyleSheet } from "react-native";
import { Text, ButtonGroup } from '@rneui/themed';

import useSearchResults from "../hooks/useSearchResults";
import Block from "../components/search/block";
import PlaceDetails from "../components/index/placeDetails";


const GeneralSearchScreen = ({navigation}: {navigation: NavigationStackProp}) => {
    const name = navigation.getParam('term');
    const { searchAPI, general } = useSearchResults();

    useEffect(() => { searchAPI(name, null) }, []);
    
    return(
        <View style = {{flex: 1}}>
            <Block 
                navigation = { navigation }
                name = { name }
                data = { general }
            />            
        </View>
    );

    
};




export default GeneralSearchScreen;