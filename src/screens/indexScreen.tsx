import React, {useState} from 'react';
import { View, StyleSheet, StatusBar, FontVariant, ScrollView } from 'react-native';
import { Text, ButtonGroup } from '@rneui/themed';

import SearchBarCustom from '../components/index/searchBar';
import SearchButton from '../components/index/searchButton';
import Block from '../components/index/block';

import useSearchResults from '../hooks/useSearchResults';

const notificationBarHeight = StatusBar.currentHeight;


const IndexScreen = ({navigation}) => {
    
    const [coffee, dinner, bar] = useSearchResults();

    return(
        <ScrollView style = {styles.main}>
            <View style = { styles.block }>
            <Text h3 h3Style = {styles.greeting} >Hi, little seal!</Text>
            </View>

            <View style = { styles.block }>
            <SearchBarCustom />
            </View>

            <View style = { styles.block }>
            <SearchButton />
            </View>

            <View style = { styles.block }>
            <Block name={"Coffee and pastries"} data = { coffee } />
            </View>

            <View style = { styles.block }>
            <Block name={"Dinner"} data = { dinner } />
            </View>
            
            <View style = { styles.block }>
            <Block name={"Bars"} data = { bar } />
            </View>
        </ScrollView>
    );
};

IndexScreen.navigationOptions = {headerShown: true, title: "", headerStyle :{height: 40}} ;

const styles = StyleSheet.create({
    main: {
        flex: 0,
    },
   
    greeting: {
        fontVariant: 'small-caps' as any ,
        letterSpacing: 1
    },

    block: {
        margin: 5
    }
});

export default IndexScreen;