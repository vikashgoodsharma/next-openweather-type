"use client";
import { useState } from "react";
import { convertUnixTimestamp, getDayOfWeek } from "../utils/utils";

export const RightSection = ({weatherData, weatherDayData}: { weatherData: any, weatherDayData: any }) => {
    const [isWeekSelected, setIsWeekSelected]= useState(true);
    const [isCelciusSelected, setIsCelciusSelected]= useState(true);
 
  return (
    <div className="bg-gray-100 w-[75%] rounded-r-3xl py-8 px-[5%]">
        <div className="flex justify-between">
            <div className="flex gap-2 p-4">
                <div className={`${isWeekSelected ? 'text-slate-400' :" border-b-2 border-black font-bold "}`} onClick={()=>setIsWeekSelected(!isWeekSelected)}>Today</div>
                <div className={`${isWeekSelected ? 'border-b-2 border-black  font-bold' :"text-slate-400"}`}  onClick={()=>setIsWeekSelected(!isWeekSelected)}>Week</div>
            </div>
            <div className="flex gap-3 p-4">
                <div onClick={()=>setIsCelciusSelected(true)} className={`w-[35px] h-[35px] flex justify-center font-bold rounded-full ${isCelciusSelected ? 'bg-black text-white': "bg-white text-black"} `}>
                <p className="self-center"><span>&deg;C</span></p> 
                </div>
                <div onClick={()=>setIsCelciusSelected(false)} className={`w-[35px] h-[35px] flex justify-center font-bold rounded-full ${!isCelciusSelected ? 'bg-black text-white': "bg-white text-black"} `}>
                <p className="self-center"><span>&deg;F</span></p> 
                </div>
                <img src="/usericon.png" className="w-[40px] h-[40px] ml-[40px] rounded-full"/>
            </div>

        </div>

        <div className="flex justify-evenly mt-16">
            { weatherData?.list?.map((item:any, index:number)=>{
                return(
                    <div className="bg-white w-[14%] rounded-3xl flex-col justify-between p-2" key={index}>
                      <div className="text-center font-bold">
                      {getDayOfWeek(item.dt_txt).substring(0,3)}
                        </div>  
                     <div className="flex justify-center">
                           <img src={`http://openweathermap.org/img/w/${item.weather[0].icon}.png`} className="w-[60%]"/>
                        </div>
                        <div className="text-center font-bold text-[12px]">{item.main.temp_max} &deg; <span className="text-gray-500">{item.main.temp_min} &deg;</span></div>
                    </div>
                )
            })}
        </div>

        <div className="mt-8">
            <p className="font-bold text-[20px]">Today's Highlights</p>


            <div className="flex flex-wrap justify-between mt-8 w-full">
         
                    <div className="bg-white rounded-3xl w-[30%] my-4 p-4">
                        <p className="text-gray-400 px-4">Wind Status</p>
                        <p className="text-center font-bold my-[30px] text-[35px]">{weatherDayData?.wind?.speed} km/h</p>
                        <p className="font-bold px-4">WSW</p>
                    </div>

                    <div className="bg-white rounded-3xl w-[30%] my-4 p-4">
                        <p className="text-gray-400 px-4">Sunrise & Sunset</p>
                        <div className="flex gap-2 px-4 my-4">
                            <img src="/wind.svg" className="w-[35px]"/>
                            <div>
                            <p className="font-bold">{convertUnixTimestamp(weatherDayData?.sys?.sunrise)} AM</p>
                            <p className="text-gray-300">-1m 46s</p>
                            </div>

                        </div>
                        <div className="flex gap-2 px-4 my-4">
                            <img src="/wind.svg" className="w-[35px] rotate-180"/>
                            <div>
                            <p className="font-bold">{convertUnixTimestamp(weatherDayData?.sys?.sunset)} PM</p>
                            <p className="text-gray-300">+2m 22s</p>
                            </div>

                        </div>
                    </div>

                    <div className="bg-white rounded-3xl w-[30%] my-4 p-4">
                        <p className="text-gray-400 px-4">Humidity</p>
                        <p className="text-center font-bold my-[30px] text-[35px]">{weatherDayData?.main?.humidity} <sup>%</sup></p>
                        <p className="font-bold px-4">Normal  &#129305;</p>
                    </div>

                    <div className="bg-white rounded-3xl w-[30%] my-4 p-4">
                        <p className="text-gray-400 px-4">Visiblity</p>
                        <p className="text-center font-bold my-[30px] text-[35px]">{weatherDayData?.visibility/1000} <span className="text-[25px]">km</span></p>
                        <p className="font-bold px-4">Average   &#x1F615;</p>
                    </div>
             
        </div>

        </div>

            </div>
  );
};
