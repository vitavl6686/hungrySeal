import { useEffect, useState } from 'react';
import yelp from '../../api/yelp';

export type EateryDetails =  {
    name: String,
    photos: Array<string>,
    location: {
        display_address: Array<String>
    },
    categories: [{alias: String, title: String}]
}

export default (id: String) => {

    const [ placeDetails, setPlaceDetails ] = useState<EateryDetails>({name: "", photos: [], location: {display_address: []}, categories: [{alias: '', title: ''}]});

    const requestDetails = async (id: String) => {

        try {
            const responce = await yelp.get(`/${id}`);
            setPlaceDetails(responce.data);
        }

        catch(err) {
            console.log(err);
        }
    }

    useEffect(() => { requestDetails(id) }, []);
    return { placeDetails, setPlaceDetails };
}