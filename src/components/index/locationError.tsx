import React, { useContext } from 'react';
import { TouchableOpacity, View, StyleSheet } from 'react-native';

import { Text } from '@rneui/themed';
import { AntDesign } from '@expo/vector-icons'; 

import locationContext from "../../context/locationContext";

const LocationError = () => {
    const {actions, locationState} = useContext(locationContext)

    if (locationState.errorMessage !== "" ) {
        return(
            <View style = { styles.locationError }>
            <TouchableOpacity
                onPress={() => { actions.setErrorMessage(""); }}>
                    <AntDesign name="close" size={24} color="black" />
            </TouchableOpacity>
            <Text style = { styles.errorMessage }>{ locationState.errorMessage }</Text>
        </View>  
        );
    }
};

const styles = StyleSheet.create({
    locationError: {
        backgroundColor: "#edcece",
        margin: 8,
        borderColor: "#f59595",
        borderWidth: 2,
        borderRadius: 5,
    },

    errorMessage: {
        fontSize: 16,
        fontVariant: 'small-caps' as any ,
        letterSpacing: 0.5,
        margin: 5,
        fontWeight: "500"
    }

});

export default LocationError;