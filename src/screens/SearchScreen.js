import React from 'react';
import { View, Text, StyleSheet, ScrollView} from 'react-native';
import SearchBar from '../components/SearchBar';
import { useState, useEffect, useContext } from 'react';
import useResults from '../hooks/useResults';
import ResultsList from '../components/ResultsList';
import { requestForegroundPermissionsAsync, Accuracy, watchPositionAsync } from 'expo-location';
import LocationContext from '../LocationContext';



const locationWorker = async (setErrorMessage, setLocation) => {
    collectPermission(setErrorMessage);
    detectLocation(setLocation);
};

const collectPermission = async(setErrorMessage) => {
    try {
        const { granted } = await requestForegroundPermissionsAsync();
        
        if (!granted) {    
            setErrorMessage("We need your location to show you around.")
        };
    }
    catch(err) {
        setErrorMessage(err);
    }
}

const detectLocation = async(setLocation) => {
    try {
    watchPositionAsync({
        accuracy: Accuracy.BestForNavigation,
        distanceInterval: 10
    },  (location) => { 
        setLocation(location)});
    }
    catch(err) {
        setErrorMessage('There was an error processing your location.');
    };

}



const SearchScreen = ({navigation}) => {
    const [userSearch, setUserSearch] = useState('');
    const [searchAPI, best, good, bad] = useResults();
    const {setLocation, setErrorMessage, errorMessage} = useContext(LocationContext);
    
    useEffect(() => {
        locationWorker(setErrorMessage, setLocation);
    }, []);
    return (
        <> 

            <SearchBar 
                userSearch = { userSearch } 
                change = { (x) => setUserSearch(x)}
                onSubmit = {() => 
                    {
                    searchAPI(userSearch)
                    this.textInput.clear();
                    }
                }
            />
            {errorMessage ? <Text style = {{color: 'red'}}>{ errorMessage }</Text> : null }

            {bad.length == 0 && good.length == 0 && best.length == 0 
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
        </>
    )
};


const styles = StyleSheet.create({
    mainStyle: {
        backgroundColor: 'white',
        flex: 1
    }
});

export default SearchScreen;