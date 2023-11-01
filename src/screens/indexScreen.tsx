import React, { useEffect, useState, useContext } from 'react';
import { NavigationStackProp } from 'react-navigation-stack';
import { View, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';

import { Text, ButtonGroup, Button } from '@rneui/themed';
import { AntDesign } from '@expo/vector-icons'; 

import SearchBarCustom from '../components/index/searchBar';
import Block from '../components/index/block';

import useSearchResults, { EateryInfo } from '../hooks/useSearchResults';
import useLocation from '../hooks/useLocation';
import locationContext from '../context/locationContext';
import LocationError from '../components/index/locationError';



const IndexScreen = ({navigation}: {navigation: NavigationStackProp}) => {
    
    const [coffee, setCoffee]: [EateryInfo[], Function] = useState(null);
    const [dinner, setDinner]: [EateryInfo[], Function] = useState(null);
    const [bar, setBar]: [EateryInfo[], Function] = useState(null);
    const { searchAPI } = useSearchResults();
    const { locationWorker } = useLocation();
    const { locationState } = useContext(locationContext);
    

    const firstRun = () => {
        console.log("again")
        if (locationState.location === null) {
            locationWorker();
            searchAPI('coffee', setCoffee, undefined, undefined);
            searchAPI('dinner', setDinner, undefined, undefined);
            searchAPI('bar', setBar, undefined, undefined);
            
        }
        else {
            searchAPI('coffee', setCoffee, locationState.location.coords.latitude, locationState.location.coords.longitude);
            searchAPI('dinner', setDinner, locationState.location.coords.latitude, locationState.location.coords.longitude);
            searchAPI('bar', setBar, locationState.location.coords.latitude, locationState.location.coords.longitude);
        }
    };

    useEffect(() => { firstRun() }, [locationState.location]); 
    var recentre = <AntDesign name="find" size={30} color="black" />
   
    return(
        <ScrollView style = {styles.main}>

            <View style = { styles.block }>
                <Text h3 h3Style = {styles.greeting} >Hi, little seal!</Text>
                <Button radius = {10} type = "clear" onPress={() => {locationWorker()}} icon = { recentre }></Button>
            </View>

            <View style = { styles.block }>
                <SearchBarCustom navigation = {navigation}/>
            </View>

            <LocationError />

            <Block name={"Coffee and pastries"} data = { coffee } navigation = { navigation } />
            <Block name={"Dinner"} data = { dinner } navigation = { navigation } />
            <Block name={"Bars"} data = { bar } navigation = { navigation } />
            
        </ScrollView>
    );
};

IndexScreen.navigationOptions = {headerShown: true, title: "", headerStyle :{ height: 40 }} ;

const styles = StyleSheet.create({
    main: {
        flex: 0,
        backgroundColor: 'white'
    },
   
    greeting: {
        fontVariant: 'small-caps' as any ,
        letterSpacing: 1
    },

    block: {
        marginVertical: 5,
        marginHorizontal: 4,
        flexDirection: "row",
        justifyContent: "space-between",
    },

    recenter: {
        backgroundColor: "#dfe1e6"
    }
});

export default IndexScreen;