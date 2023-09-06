import React, { useContext, createContext, useState } from 'react';

const LocationContext = createContext();

export const LocationContextProvider = ({children}) => {
    const [location, setLocation] = useState(null);



    return(<LocationContext.Provider value = {{location, setLocation}}>{children}</LocationContext.Provider>)
};

export default LocationContext;