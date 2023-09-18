import React, { useContext, createContext,  useReducer } from 'react';

const LocationContext = createContext();


export const LocationContextProvider = ({children}) => {

    const reducer = (state, action) => {
        switch(action.type) {
            case "set_location": {
                console.log("Got a location in context")
                return {...state, location: action.payload}
            };  
            case "set_error_message": {
                return {...action, errorMessage: action.payload};
            };
        }
    }
    const [state, dispatch] = useReducer(reducer, {location: null, errorMessage: ''});

    const setLocation = (location) =>  {
        dispatch({type: "set_location", payload: location});
    };

    const setErrorMessage = (message) => {
        dispatch({type: "set_error_message", payload: message});
    };

    return(<LocationContext.Provider value = {{location: state.location, setErrorMessage, setLocation}}>{ children }</LocationContext.Provider>)
};

export default LocationContext;