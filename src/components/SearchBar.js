import React from 'react';
import { View, TextInput, StyleSheet, Image} from 'react-native';
import { Entypo } from '@expo/vector-icons'; 
import { TouchableOpacity } from 'react-native-gesture-handler';



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
                onChangeText= { change }
                value= { userSearch }
                autoCapitalize='none'
                autoCorrect = { false }
                onEndEditing= { onSubmit }
            />

            {userSearch != '' ? 
                <TouchableOpacity
                    onPress={() => {
                                change('');
                            }}>
                    <Entypo name="cross" size={24} color="black" />
                </TouchableOpacity> 
                
                : null}
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
        marginHorizontal: 10,
        flexDirection: 'row',
        alignItems: 'center',
        flex: 1
    },

    inputStyle: {
        height: 20,
        fontSize: 16,
        flex: 1,
        paddingHorizontal: 10
    }
});

export default SearchBar;