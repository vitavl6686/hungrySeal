import { useEffect, useState, useContext } from "react";
import yelp from '../../api/yelp';

import locationContext from "../context/locationContext";


export type  EateryInfo = {
    id: string
    name: string
    image_url: string
    rating: number
    review_count: number,
    distance: number
}



export default () => {
    const { locationState } = useContext(locationContext);
    const { location } = locationState


    const MIN_RATING = 3.5;

    const clean_results = (initial: EateryInfo[]) => {
        const result: EateryInfo[] = [];
        initial.forEach((x) => {
            if ( x.rating >= MIN_RATING ) {
                result.push(x);
            }});
        return result;
    };

    const searchAPI = async (searchTerm: String, callback: Function | null, latitude: Number | undefined, longitude: Number |  undefined ) => {

        if (longitude === undefined || latitude === undefined) {
            try {
                console.log('request')
                    const response = await yelp.get('/search', {
                        params: {
                            limit: 5,
                            term:  searchTerm ,
                            sort_by: 'rating',
                            open_now: true,
                            location: 'Dublin',
                        }
                    });
                    const final_result : EateryInfo[] = clean_results(response.data.businesses);
                    
                    callback(final_result);
                    return 0;
                }
            catch(err) {
                console.log(err);
            };
        }

        else {
            try {
                    const response = await yelp.get('/search', {
                        params: {
                            limit: 20,
                            radius: 5000,
                            term:  searchTerm ,
                            sort_by: 'distance',
                            open_now: true,
                            longitude: longitude,
                            latitude: latitude
                        }
                    });
                    const final_result : EateryInfo[] = clean_results(response.data.businesses);
                    callback(final_result);
                    return 0;
                }
            catch(err) {
                console.log(err);
            };
        }

    };

    return { searchAPI };

};