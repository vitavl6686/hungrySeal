import React from 'react';
import { StyleSheet, View, TextInput, TextStyle, StyleProp} from 'react-native';
import { Ionicons } from '@expo/vector-icons'; 





const SearchBarCustom = () => {
    return(
        <View style = {styles.layout}>
            <Ionicons name="search-outline" size={40} color="black" />
            <TextInput
                autoCapitalize='none'
                blurOnSubmit
                cursorColor = 'grey'
                inputMode = 'text'
                maxLength = {50}
                placeholder = "Yummy food around the corner"
                style = {styles.input as any}

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
        alignContent: 'space-between'
    },

    input:  {
        height: 50,
        width: 400,
        fontSize: 19,
        fontVariant: 'small-caps',
        padding: 10
    }
});
export default SearchBarCustom;