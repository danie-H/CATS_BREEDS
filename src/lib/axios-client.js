import axios from 'axios';

export const client = axios.create({
    baseURL: 'https://catfact.ninja'
});


export default client;