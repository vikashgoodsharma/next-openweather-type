import {WEATHER_API_KEY} from '../keys';

const weatherDayApi = async (city:string) => {
    try {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${WEATHER_API_KEY}`);
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching weather data:', error);
        return [];
    }
};
export default weatherDayApi;


