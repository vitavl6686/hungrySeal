import React, { useEffect, useState, useContext } from "react";
import { NavigationStackProp } from "react-navigation-stack";
import { FlatList, View, StyleSheet, StatusBar, Image, ImageBackground } from "react-native";
import { Text, ButtonGroup, Button } from '@rneui/themed';

import locationContext from "../context/locationContext";
import useSearchResults, { EateryInfo } from "../hooks/useSearchResults";
import Block from "../components/search/block";
import PlaceDetails from "../components/index/placeDetails";



const GeneralSearchScreen = ({navigation}: {navigation: NavigationStackProp}) => {
    const name = navigation.getParam('term');
    const { searchAPI } = useSearchResults();
    const { location } = useContext(locationContext).locationState;

    const [general, setGeneral]: [EateryInfo[], Function] = useState(null);
    const notificationBarHeight = StatusBar.currentHeight;


    useEffect(() => { searchAPI(name, setGeneral, location.coords.latitude, location.coords.longitude) }, []);
    
    if ( general === null || general.length === 0 ) {
        return(
            <View style = {{top: notificationBarHeight + 10}}> 
                <Button title = "back"/>
                <View>
                    <Text style = { styles.errorMessage }> Nothing was found. </Text>
                </View>
                <View>
                    <Text style = { styles.errorMessage }> Why not search for something else? </Text>
                </View>
            
            </View>
        );
            
            
    }
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

GeneralSearchScreen.navigationOptions = {headerShown: false}

const styles = StyleSheet.create({
    errorMessage: {
        fontSize: 18,
        fontVariant: 'small-caps' as any ,
        letterSpacing: 0.5,
        margin: 5,
        fontWeight: "800",
        color: "black"
    },

    imageStyle: {
        width: "100%",
        height: 400
    }
})




export default GeneralSearchScreen;