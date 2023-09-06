import { useEffect, useState, useContext } from "react";
import yelp from '../../api/yelp';
import LocationContext from "../LocationContext";

export default () => {
    const [results, setResults] = useState([]);
    const [errorMessage, setErrorMessage] = useState('');
    const {location} = useContext(LocationContext);
    let best = [];
    let good = [];
    let bad = [];


    const searchAPI = async (searchTerm) => {
        
            try {
                const response = await yelp.get('/search', {
                    params: {
                        limit: 50,
                        term:  searchTerm ,
                        latitude: location.coords.latitude,
                        longitude: location.coords.longitude,
                        sort_by: 'distance',
                        open_now: true,
                        
                    }
                });
                setResults(response.data.businesses);
                console.log("Results received");

                filterByRate();
                console.log("Results received for best ", best);

                } catch (err) {
                    setErrorMessage('Something went wrong');
                }
        
        
    };

    const filterByRate = () => {
        for (i = 0; i < results.length; i++) {
            if (results[i].rating >= 4.5) {
                best.push(results[i]);
            }
            else {
                if (results[i].rating >= 3.8) {
                    good.push(results[i]);
                }
                else {
                    bad.push(results[i])
                }
            }
        }
    }
    
    
    
    filterByRate();

    useEffect(() => {
        searchAPI('dinner');
    }, [location]);

    console.log("useResults called, location: ", location);
    console.log("useResults called, best: ", best);

    return [setErrorMessage, errorMessage, searchAPI, best, good, bad, setErrorMessage];
};