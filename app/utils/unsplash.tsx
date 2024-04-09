import {ACCESS_KEY} from '../keys';
const API_KEY = ACCESS_KEY;

// Fetch photos from Unsplash
const fetchPhotos = async (query:string) => {
    try {
        const response = await fetch(`https://api.unsplash.com/photos?query=${query}&client_id=${API_KEY}`);
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching photos from Unsplash:', error);
        return [];
    }
};
export default fetchPhotos;