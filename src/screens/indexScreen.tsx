import React, { useEffect } from 'react';
import { NavigationStackProp } from 'react-navigation-stack';
import { View, StyleSheet, ScrollView } from 'react-native';
import { Text, ButtonGroup } from '@rneui/themed';

import SearchBarCustom from '../components/index/searchBar';
import Block from '../components/index/block';

import useSearchResults, { EateryInfo } from '../hooks/useSearchResults';
import useLocation from '../hooks/useLocation';



const IndexScreen = ({navigation}: {navigation: NavigationStackProp}) => {
    
    const { coffee, dinner, bar } = useSearchResults();
    useLocation();
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