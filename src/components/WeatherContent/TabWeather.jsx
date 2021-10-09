import React from 'react'
import PropTypes from 'prop-types'
import style from './WeatherContent.module.scss'
import { getDayName, getDayMounth, getMounthName } from '../../utils/date'
import Image from '../../UI/Image';


TabWeather.propTypes = {
   numElem: PropTypes.number.isRequired,
   tabEvent: PropTypes.func.isRequired
}

function TabWeather({ forecast, numElem, tabEvent }) {
   let date = new Date(forecast.date);

   return (
      <div
         className={`${style["tab_item_" + (numElem)]} ${style.tab_item}`}
         onClick={() => tabEvent("tab" + numElem)}
      >
         <div className={style.day_name}>{getDayName(date.getDay())}</div>
         <div className={new Date().getDate() === date.getDate() ? `${style.day} ${style.active}` : style.day}>{getDayMounth(date.getDate())}</div>
         <div className={style.mounth}>{getMounthName(date.getMonth())}</div>
         <Image src={`./images${forecast.day.condition.icon.slice(20)}`} alt={forecast.day.condition.text} />
         <div className={style.tab_temp}>
            <div className={style.min_temp}>{forecast.day.mintemp_c ? `+${forecast.day.mintemp_c}` : forecast.day.mintemp_c}&deg;</div>
            <div className={style.max_temp}>{forecast.day.maxtemp_c ? `+${forecast.day.maxtemp_c}` : forecast.day.maxtemp_c}&deg;</div>
         </div>
      </div>
   )
}

export default TabWeather
