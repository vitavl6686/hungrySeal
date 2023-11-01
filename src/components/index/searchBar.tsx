import React, { useEffect, useState } from 'react';
import { StyleSheet, View, TextInput, TextStyle, StyleProp} from 'react-native';
import { Ionicons } from '@expo/vector-icons'; 
import useSearchResults from '../../hooks/useSearchResults';
import { NavigationStackProp } from 'react-navigation-stack';




const SearchBarCustom = ({navigation}: {navigation: NavigationStackProp}) => {
    const [userSearch, setUserSearch] = useState("");
    return(
        <View style = {styles.layout}>
            <Ionicons name="search-outline" size={40} color="black" />
            <TextInput
                autoCapitalize='none'
                autoCorrect = {false}
                cursorColor = 'grey'
                inputMode = 'text'
                maxLength = {50}
                placeholder = "Yummy food around the corner"
                style = { styles.input as any }

                value = { userSearch }
                onChangeText = {(new_text) => setUserSearch(new_text)}
                onSubmitEditing = { () => {
                        setUserSearch("");
                        navigation.navigate('generalSearch', {term: userSearch});
                    }}
            />

        </View>
    );
};

const styles = StyleSheet.create({
    layout: {
        borderColor: 'grey',
        borderWidth: 2,
        borderRadius: 5,
        flexDirection: 'row',
        margin: 5,
        width: 400,
        alignContent: 'space-between'
    },

    input:  {
        height: 50,
        width: 400,
        fontSize: 19,
        fontVariant: 'small-caps',
        padding: 0
    }
});
export default SearchBarCustom;