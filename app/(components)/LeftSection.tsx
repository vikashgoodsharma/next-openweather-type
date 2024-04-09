"use client";

import { formatDateTime } from "../utils/utils";

export const LeftSection = ({weatherData, weatherDayData, photoData}: { weatherData: any, weatherDayData: any, photoData: any }) => {
    
  return (
  <>
     <div className="flex justify-center">
         {weatherDayData && weatherDayData.name &&  <img src={`http://openweathermap.org/img/w/${weatherDayData?.weather[0]?.icon}.png`} className="w-[70%] p-[4%] my-[20px] "/>
     }     </div>  
          {weatherData?.city && weatherData?.list?.length > 0 && 
          <>
              <div className="text-[60px] mb-[40px]">{weatherData?.list[0]?.main?.temp}<sup> <span className="text-[50px]">&deg;C</span></sup></div>
                    <div className="">{formatDateTime(weatherData?.list[0]?.dt_txt)}</div>
                    <hr className="my-[40px]"/>
                    <div className="my-[20px] font-bold">{weatherData?.list[0]?.weather[0]?.description}</div>
                    <div className="my-[20px]">Rain-30%</div>
          
          </>}
            <img  src={photoData[0]?.urls.regular} className="rounded-3xl h-24 w-full" />
            
  
  </>


       

  );
};
