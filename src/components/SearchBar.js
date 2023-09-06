import React from 'react';
import { View, TextInput, StyleSheet, Image} from 'react-native';
import { Entypo } from '@expo/vector-icons'; 



const SearchBar = ({userSearch, change, onSubmit}) => {

    return(
        <View style = { styles.barStyle }>
            <Entypo 
                name="magnifying-glass" 
                size={30} 
                color="black" 
            />
            <TextInput 
                style = { styles.inputStyle }
                placeholder= 'Yummy food around the corner'
                onChangeText= {change}
                value= { userSearch }
                autoCapitalize='none'
                autoCorrect = {false}
                onEndEditing= {onSubmit}
                ref={input => { this.textInput = input }}
            />
        </View>
    )
};

const styles = StyleSheet.create({
    barStyle: {
        backgroundColor: 'rgb(230, 234, 240)',
        borderWidth: 2,
        borderColor: 'rgb(177, 185, 196)',
        borderRadius: 5,
        padding: 10,
        marginVertical: 15,
        marginHorizontal: 25,
        flexDirection: 'row',
        alignItems: 'center',
    },

    inputStyle: {
        fontSize: 16,
        flex: 1,
        paddingHorizontal: 10
    }
});

export default SearchBar;