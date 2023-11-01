import { LocationAccuracy, LocationObject } from 'expo-location';
import React, { useReducer, useState } from 'react';


export type LocationContext = {
    locationState: LocationState,
    actions: {
        setLocation: Function,
        setErrorMessage: Function
    }
}

export type LocationState = {
    location: LocationObject,
    errorMessage: String
}

const locationContext = React.createContext<LocationContext>(null); 



export const LocationContextProvider = ({children}: {children: React.ReactNode}) => {

    const [ locationState, setLocationState ] = useState<LocationState>({ location: null, errorMessage: ""});
    

    const setLocation = (newLocation: LocationObject) => {
        setLocationState({...locationState, location: newLocation });
    }

    const setErrorMessage = (message: String) => {
        setLocationState({...locationState, errorMessage: message });
    }

    

    return <locationContext.Provider value = {{ locationState, actions: {setLocation, setErrorMessage} }}>
        {children}
    </locationContext.Provider>;
}

export default locationContext;