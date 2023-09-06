import { useState } from "react";
import yelp from '../../api/yelp';

export default () => {

    const detailsAPI = async (id) => {
        try {
        const response = await yelp.get(`/${id}`, {
            params: {
            }
        });

        return response.data.businesses;

        } catch (err) {
            setErrorMessage('Something went wrong');
        }




    };

    return [detailsAPI];
};