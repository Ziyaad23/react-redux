import axios from 'axios';

const baseURL = axios.create({

    baseURL: "https://www.breakingbadapi.com/api"
});

export default baseURL;