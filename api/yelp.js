import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.yelp.com/v3/businesses',
    headers: {
        Authorization: 'Bearer MFgw0QUK_po-ImNTFn73fI8Sdae8eduCxzGzr5Fv9Jouy9aDVHWAaNchNOxIBUiD0NAnXYrRPlRnO-ECdHGHbS-hbXVQfIOFdhpVUe8Uja0vJ9d7FRzXIt6B6ZfTZHYx'
    }
})