import { useEffect, useState } from "react";
import yelp from '../../api/yelp';

export type  EateryInfo = {
    id: string
    name: string
    image_url: string
    rating: number
    review_count: number
}

export default () => {
    const [coffee, setCoffee] = useState<Array<EateryInfo>>([]);
    const [dinner, setDinner] = useState<Array<EateryInfo>>([]);
    const [bar, setBar] = useState<Array<EateryInfo>>([]);
    const [general, setGeneral] = useState<Array<EateryInfo>>([]);

 
    const searchAPI = async (searchTerm: String, callback: Function | null) => {
        if (callback == null){
            callback = setGeneral;
        }
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
                return 0;
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


    return {coffee, dinner, bar, general, searchAPI};

};