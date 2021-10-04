import React from 'react'
import style from './WeatherContent.module.scss'
import TabWeather from './TabWeather';



function WeatherContent({ forecastWeather, cName = "tab1" }) {
   let key = 1;

   return (
      <div className={style.weather_content}>
         <div className={`${style.tabs} ${style[cName]}`}>

         </div>
         <div className={style.content}>
            1
         </div>
      </div>
   )
}

export default WeatherContent

// {
//    forecastWeather.map(forecast => {

//       return (
//          {/* {/* <TabWeather key={key++} /> */ } */}
//       )
//    })
// }