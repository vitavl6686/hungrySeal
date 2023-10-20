
import React, { ReactNode } from 'react';
import { useState, useEffect, useContext } from 'react';
import { LocationObject, getCurrentPositionAsync, requestForegroundPermissionsAsync, Accuracy } from "expo-location";
import locationContext from '../context/locationContext';

export default () => {

    const {locationState, setLocation} = useContext(locationContext);
    const { location, errorMessage } = locationState;

    const permissionCollector = async () => {
        try{
            const { granted } = await requestForegroundPermissionsAsync();
            if (!granted) {
                console.log("User rejected location use.")
            }
        }
        catch(err) {
            console.log("Something went wrond when requestion permission for location use.")
        }
    };

    const getLocation = async() => {
        const responce = await getCurrentPositionAsync({ accuracy: Accuracy.BestForNavigation });
        setLocation(responce);
        console.log('location detected again')
    }

    const locationWorker = async () => {
        permissionCollector();
        getLocation();
    }

    

    useEffect(() => {
        console.log('location changed')
        }, [location]);

    return { locationWorker };
}
    







