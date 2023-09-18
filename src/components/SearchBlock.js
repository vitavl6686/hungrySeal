import React from 'react';
import { View, StyleSheet } from 'react-native';
import SearchBar from './SearchBar';
import { Ionicons } from '@expo/vector-icons'; 
import { TouchableOpacity } from 'react-native-gesture-handler';

const SearchBlock = ({userSearch, setUserSearch, searchAPI, relocate}) => {
    return(
        <View style = {styles.block}>
            <SearchBar 
                userSearch = { userSearch } 
                change = { (x) => setUserSearch(x)}
                onSubmit = {() => 
                    { searchAPI(userSearch)}
                }
            />
            <TouchableOpacity
                onPress={() => {relocate()}}>
                <Ionicons 
                    name="locate" 
                    size={30} 
                    color="black"
                    style = {{margin: 10}}
                />
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    block: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
})
export default SearchBlock; 