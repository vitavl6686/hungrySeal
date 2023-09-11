
import React, {useContext} from 'react';
import { requestForegroundPermissionsAsync, Accuracy, getCurrentPositionAsync } from 'expo-location';

import LocationContext from '../LocationContext';

export default () => {
    const {setLocation, setErrorMessage, errorMessage} = useContext(LocationContext);

    const locationWorker = async (setErrorMessage, setLocation) => {
        collectPermission(setErrorMessage);
        detectLocation(setLocation);
    };

    const collectPermission = async(setErrorMessage) => {
        try {
            const { granted } = await requestForegroundPermissionsAsync();
            
            if (!granted) {    
                setErrorMessage("We need your location to show you around.")
            };
        }
        catch(err) {
            setErrorMessage(err);
        };
    };

    const detectLocation = async(setLocation) => {
        try {
        const location = await getCurrentPositionAsync({
            accuracy: Accuracy.BestForNavigation
        });
        console.log("got a new location:", location);
        setLocation(location);
        }
        catch(err) {
            setErrorMessage('There was an error processing your location.');
        };
    };


    return [locationWorker];

};