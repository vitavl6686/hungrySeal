import { LocationAccuracy, LocationObject } from 'expo-location';
import React, { useReducer, useState } from 'react';


export type LocationContext = {
    locationState: LocationState,
    setLocation: Function
}

export type LocationState = {
    location: LocationObject,
    errorMessage: String
}

const locationContext = React.createContext<LocationContext>(null); //add type when you realise what it is



export const LocationContextProvider = ({children}: {children: React.ReactNode}) => {

    const [ locationState, setLocationState ] = useState<LocationState>({ location: null, errorMessage: ""});
    

    const setLocation = (newLocation: LocationObject) => {
        setLocationState({...locationState, location: newLocation })
    }


    return <locationContext.Provider value = {{ locationState, setLocation }}>
        {children}
    </locationContext.Provider>;
}

export default locationContext;