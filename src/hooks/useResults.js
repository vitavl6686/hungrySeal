import { useEffect, useState } from "react";
import yelp from '../../api/yelp';

export default () => {
    const [results, setResults] = useState([]);
    const [errorMessage, setErrorMessage] = useState('');
    let best = [];
    let good = [];
    let bad = [];

    const searchAPI = async (searchTerm) => {
        try {
        const response = await yelp.get('/search', {
            params: {
                limit: 50,
                term:  searchTerm ,
                location: 'Dublin',
                sort_by: 'distance',
                open_now: true,
                radius: 2000
            }
        });
        setResults(response.data.businesses);
        filterByRate();

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
    }, []);

    return [errorMessage, searchAPI, best, good, bad];
};