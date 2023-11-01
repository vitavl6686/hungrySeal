
import React, { ReactNode } from 'react';
import { useState, useEffect, useContext } from 'react';
import { LocationObject, getCurrentPositionAsync, requestForegroundPermissionsAsync, Accuracy } from "expo-location";
import locationContext from '../context/locationContext';

export default () => {

    const {locationState, actions} = useContext(locationContext);
    const { location, errorMessage } = locationState;

    const permissionCollector = async () => {
        try{
            const { granted } = await requestForegroundPermissionsAsync();
            if (!granted) {
                console.log("User rejected location use.");
                actions.setErrorMessage("You should allow location detection for better user experience.");
            }
        }
        catch(err) {
            console.log("Something went wrong when requestion permission for location use. Log: ", err);
            actions.setErrorMessage("Something went wrong during location detection.");

        };
        actions.setErrorMessage("");
    };

    const getLocation = async() => {
        try {
            const responce = await getCurrentPositionAsync({ accuracy: Accuracy.BestForNavigation });
            actions.setLocation(responce);
        }

        catch(err) {
            console.log("Something went wrong during location detection: ", err);
            actions.setErrorMessage("Something went wrong during location detection.");
        }
    }

    const locationWorker = async () => {
        permissionCollector();
        getLocation();
    }

    return { locationWorker };
}
    







