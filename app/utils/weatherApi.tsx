import {WEATHER_API_KEY} from '../keys';

const weatherApi = async (city:string) => {
    try {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&cnt=7&appid=${WEATHER_API_KEY}`);
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching weather data:', error);
        return [];
    }
};
export default weatherApi;


