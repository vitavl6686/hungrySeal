import React from "react";
import { View } from 'react-native'
import { NavigationStackProp } from "react-navigation-stack";

const restaurantDetailsScreen = ({ navigation }: {navigation: NavigationStackProp}) => {
    const id: String = navigation.getParam('id');
    return(
        <View>

        </View>
    );
}