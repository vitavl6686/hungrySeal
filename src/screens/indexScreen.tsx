import React, { useEffect, useState, useContext } from 'react';
import { NavigationStackProp } from 'react-navigation-stack';
import { View, StyleSheet, ScrollView } from 'react-native';
import { Text, ButtonGroup } from '@rneui/themed';

import SearchBarCustom from '../components/index/searchBar';
import Block from '../components/index/block';

import useSearchResults, { EateryInfo } from '../hooks/useSearchResults';
import useLocation from '../hooks/useLocation';
import locationContext from '../context/locationContext';



const IndexScreen = ({navigation}: {navigation: NavigationStackProp}) => {
    //Check when you have requests that this works in general and solves the problem with multiply requests.
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
    
    return(
        <ScrollView style = {styles.main}>
            <View style = { styles.block }>
            <Text h3 h3Style = {styles.greeting} >Hi, little seal!</Text>
            </View>

            <View style = { styles.block }>
                <SearchBarCustom navigation = {navigation}/>
            </View>

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
        marginHorizontal: 4
    }
});

export default IndexScreen;