import React from "react";
import { View, StyleSheet, Dimensions } from 'react-native';
import MapView from 'react-native-maps';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const MapScreen = () => {
    return(
        <View>
            <MapView
                style = {styles.map}    
            >
            </MapView>
        </View>
    );
};

const styles = StyleSheet.create({
    map: {
        width: windowWidth,
        height: windowHeight 
    }
})

export default MapScreen;