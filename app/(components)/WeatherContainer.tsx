"use client";
import { useEffect, useState } from "react";
import { RightSection } from "./RightSection";
import fetchPhotos from "../utils/unsplash";
import weatherApi from "../utils/weatherApi";
import { formatDateTime } from "../utils/utils";
import weatherDayApi from "../utils/weatherDayApi";
import { LeftSection } from "./LeftSection";




export const WeatherContainer = () => {
  const [photos, setPhotos] = useState([]);
  const [weatherData, setWeatherData] = useState(null);
  const [weatherDayData, setWeatherDayData] = useState(null);

  const [city, setCity]= useState('delhi');

  const fetchData = async () => {
    const data = await fetchPhotos(city); 
    setPhotos(data);
};

const fetchWeatherData = async () => {
  const data = await weatherApi(city); 
 console.log(data);
 setWeatherData(data);
};

const fetchWeatherDayData = async () => {
  const data = await weatherDayApi(city); 
 console.log(data);
 setWeatherDayData(data);
};

  useEffect(() => {
      fetchData();
      fetchWeatherData();
      fetchWeatherDayData();
  }, [city]);







  return (
    <div className="w-full h-full  p-[7%]">
        <div className="w-full h-full bg-white rounded-3xl flex z-10">
            <div className="w-[25%]  p-[2%]">
              <div className="flex gap-3">
                <img src="/search.png" className="w-[32px] h-[32px]"/>
                <input placeholder="Search for places..." value={city} onChange={(e)=>setCity(e.target.value)}/>
                <img src="/close.png" className="w-[32px] h-[32px]" onClick={()=>setCity("delhi")}/>
              </div>
           
         <LeftSection weatherData={weatherData} weatherDayData={weatherDayData} photoData={photos}/>
            </div>
            
           <RightSection weatherData={weatherData} weatherDayData={weatherDayData}/>

          

        </div>
    
    </div>
  );
};
