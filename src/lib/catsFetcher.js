import client from './axios-client';

export const fetchBreeds = async () => {
    try {
        const { data } = await client.get('/breeds');
        return data;
    } catch (error) {
        console.log(error)
    }
}

export const fetchBreedsPage = async (page) => {
    try {
        const { data } = await client.get(`/breeds?page=${page}`);
        return data;
    } catch (error) {
        console.log(error)
    }
}

export const fetchRandomFact = async () => {
    try {
        const { data } = await client.get('/fact');
        return data;
    } catch (error) {
        console.log(error)
    }
}

export default fetchBreeds;