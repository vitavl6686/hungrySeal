import React from "react";
import { View, StyleSheet } from 'react-native';
import { NavigationStackProp } from "react-navigation-stack";

const PlaceScreen =  ({ navigation }: {navigation: NavigationStackProp}) => {
    const id: String = navigation.getParam('id');
    console.log(id)
    return(
        <View>

        </View>
    )
};

const styles = StyleSheet.create(
    {

    }
);

export default PlaceScreen;