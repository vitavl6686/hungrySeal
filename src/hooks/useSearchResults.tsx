import { useEffect, useState, useContext } from "react";
import yelp from '../../api/yelp';

import locationContext from "../context/locationContext";


export type  EateryInfo = {
    id: string
    name: string
    image_url: string
    rating: number
    review_count: number
}



export default () => {
    const { locationState } = useContext(locationContext);
    const { location } = locationState

    const [coffee, setCoffee] = useState<Array<EateryInfo>>([]);
    const [dinner, setDinner] = useState<Array<EateryInfo>>([]);
    const [bar, setBar] = useState<Array<EateryInfo>>([]);
    const [general, setGeneral] = useState<Array<EateryInfo>>([]);

 
    const searchAPI = async (searchTerm: String, callback: Function | null, latitude: Number | undefined, longitude: Number |  undefined ) => {
        if (callback === null){
            callback = setGeneral;
        }

        if (longitude === undefined || latitude === undefined) {
            try {
                console.log('request')
                    const response = await yelp.get('/search', {
                        params: {
                            limit: 10,
                            term:  searchTerm ,
                            sort_by: 'rating',
                            open_now: true,
                            location: 'Dublin',
                        }
                    });
                    console.log(response)
                    callback(response.data.businesses);
                    return 0;
                }
            catch(err) {
                console.log(err);
            };
        }

        else {
            try {
                console.log('request')
                    const response = await yelp.get('/search', {
                        params: {
                            limit: 10,
                            term:  searchTerm ,
                            sort_by: 'rating',
                            open_now: true,
                            longitude: longitude,
                            latitude: latitude
                        }
                    });
                    console.log(response)
                    callback(response.data.businesses);
                    return 0;
                }
            catch(err) {
                console.log(err);
            };
        }

    };

    const firstRun = () => {
        if (location) {
            searchAPI('coffee', setCoffee, location.coords.latitude, location.coords.latitude);
            searchAPI('dinner', setDinner, location.coords.latitude, location.coords.latitude);
            searchAPI('bar', setBar, location.coords.latitude, location.coords.latitude);
        }
        else {
            searchAPI('coffee', setCoffee, undefined, undefined);
            searchAPI('dinner', setDinner, undefined, undefined);
            searchAPI('bar', setBar, undefined, undefined);
        }
    };

    useEffect(() => { firstRun() }, [location] );


    return {coffee, dinner, bar, general, searchAPI};

};