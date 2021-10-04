import React from 'react'
import style from './WeatherContent.module.scss'
import { useSelector } from 'react-redux'
import { getDayName, getDayMounth, getMounthName } from '../../utils/date'

let counter = 1;

function TabWeather() {
   let forecast = useSelector(state => state.weather.forecast[0])

   let date = new Date(forecast.date);

   return (
      <div
         className={`${style["tab_item_" + counter++]} ${style.tab_item}`}
      >
         <div className={style.day_name}>{getDayName(date.getDay())}</div>
         <div className={style.day}>{getDayMounth(date.getDate())}</div>
         <div className={style.mounth}>{getMounthName(date.getMonth())}</div>
         <div className={style.tab_temp}>
            <div className={style.min_temp}>{forecast.day.mintemp_c ? `+${forecast.day.mintemp_c}` : forecast.day.mintemp_c}</div>
            <div className={style.max_temp}>{forecast.day.maxtemp_c ? `+${forecast.day.maxtemp_c}` : forecast.day.maxtemp_c}</div>
         </div>
      </div>
   )
}

export default TabWeather
