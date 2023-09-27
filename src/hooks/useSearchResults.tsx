import { useEffect, useState, useContext } from "react";
import yelp from '../../api/yelp';

export default () => {
    const [coffee, setCoffee] = useState<object>([]);
    const [dinner, setDinner] = useState<object>([]);
    const [bar, setBar] = useState<object>([]);
    const [general, setGeneral] = useState<object>([]);



    const searchAPI = async (searchTerm: String, callback: Function) => {
        try {
                const response = await yelp.get('/search', {
                    params: {
                        limit: 10,
                        term:  searchTerm ,
                        sort_by: 'rating',
                        open_now: true,
                        location: 'Dublin',
                    }
                });
                callback(response.data.businesses);
                
            }
        catch(err) {
            console.log(err);
        };
    };

    const firstRun = () => {
        searchAPI('coffee', setCoffee);
        searchAPI('dinner', setDinner);
        searchAPI('bar', setBar);
    };

    useEffect(() => { firstRun() }, [] );
    useEffect(() => console.log(bar), [ bar ]);

    return [coffee, dinner, bar];

};