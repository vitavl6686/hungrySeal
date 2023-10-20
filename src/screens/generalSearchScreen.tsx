import React, { useEffect, useState, useContext } from "react";
import { NavigationStackProp } from "react-navigation-stack";
import { FlatList, View, StyleSheet } from "react-native";
import { Text, ButtonGroup } from '@rneui/themed';

import locationContext from "../context/locationContext";
import useSearchResults, { EateryInfo } from "../hooks/useSearchResults";
import Block from "../components/search/block";
import PlaceDetails from "../components/index/placeDetails";



const GeneralSearchScreen = ({navigation}: {navigation: NavigationStackProp}) => {
    const name = navigation.getParam('term');
    const { searchAPI } = useSearchResults();
    const { locationState } = useContext(locationContext);
    const { location } = locationState

    const [general, setGeneral]: [EateryInfo[], Function] = useState(null);


    useEffect(() => { searchAPI(name, setGeneral, location.coords.latitude, location.coords.longitude) }, []);
    
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