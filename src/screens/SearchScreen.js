import React from 'react';
import { View, Text, StyleSheet, ScrollView} from 'react-native';
import SearchBar from '../components/SearchBar';
import { useState } from 'react';
import useResults from '../hooks/useResults';
import ResultsList from '../components/ResultsList';


const SearchScreen = ({}) => {


    const [userSearch, setUserSearch] = useState('');
    const [errorMessage, searchAPI, best, good, bad] = useResults();

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
            {errorMessage ? <Text style = {{color: 'red'}}>{errorMessage}</Text> : null }

            {bad.length == 0 && good.length == 0 && best.length == 0 
                ? <Text style= {{fontSize: 25}}>Nothing is found</Text> : null}
            <ScrollView>
            <ResultsList 
                name = "Very Good" 
                list = {best} 
            />
            <ResultsList 
                name = "Bit Worse" 
                list = {good}
            />
            <ResultsList 
                name = "Avoid" 
                list = {bad}
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