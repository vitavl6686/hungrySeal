import React, { useState, useEffect, useContext } from 'react';
import { StyleSheet, ScrollView, StatusBar, Text, View, } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

import { Entypo } from '@expo/vector-icons'; 

import LocationContext from '../LocationContext';
import useResults from '../hooks/useResults';
import useLocation from '../hooks/useLocation';
import SearchBlock from '../components/SearchBlock';
import ResultsList from '../components/ResultsList';

const StatusBarHeight = StatusBar.currentHeight;

const SearchScreen = ({navigation}) => {
    const [userSearch, setUserSearch] = useState('');
    const [searchAPI, best, good, bad] = useResults();
    const [locationWorker] = useLocation();
    const {setLocation, setErrorMessage, errorMessage} = useContext(LocationContext);
   
    

    useEffect(() => {
        locationWorker(setErrorMessage, setLocation);
    }, []);
    return (
        <View style = {styles.mainView}> 
             
            <SearchBlock 
                setUserSearch= {setUserSearch} 
                userSearch = {userSearch} 
                searchAPI = {searchAPI}
                relocate = {() => locationWorker(setErrorMessage, setLocation)}
            />
            
            <TouchableOpacity onPress={() => {navigation.navigate("Map")}}>
                <Entypo style = {styles.map} name="map" size={30} color="black" />
            </TouchableOpacity>

            {errorMessage ? <Text style = {{color: 'red'}}>{ errorMessage }</Text> : null }

            {bad.length === 0 && good.length === 0 && best.length === 0 
                ? <Text style= {{fontSize: 25}}>Nothing is found</Text> : null}

            <ScrollView>

            <ResultsList 
                name = "Very Good" 
                list = { best } 
            />
            <ResultsList 
                name = "Bit Worse" 
                list = { good }
            />
            <ResultsList 
                name = "Avoid" 
                list = { bad }
            />
            </ScrollView>
        </View>
    )
};

SearchScreen.navigationOptions = ({ navigation }) => {
    return {
        headerShown: false
    }
};

const styles = StyleSheet.create({
    mainView: {
        flex: 1,
        top: StatusBarHeight,
    },
    map: {
        marginHorizontal: 20
    }
});

export default SearchScreen;