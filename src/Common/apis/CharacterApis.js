import axios from 'axios';

const baseAPI = axios.create({

    baseURL: "https://www.breakingbadapi.com/api"
});

export default baseAPI;