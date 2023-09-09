import React, { useContext, createContext,  useReducer } from 'react';

const LocationContext = createContext();

export const LocationContextProvider = ({children}) => {
    const [state, dispatch] = useReducer(reducer, {location, errorMessage, isTracking});

    return(<LocationContext.Provider value = {{location, setLocation}}>{children}</LocationContext.Provider>)
};

export default LocationContext;