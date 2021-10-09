import React from 'react'
import PropTypes from 'prop-types'
import style from './WeatherContent.module.scss'
import TabWeather from './TabWeather'
import Image from '../../UI/Image'
import { getDayName, getDayMounth, getMounthName } from '../../utils/date'



function ForecastContent({ weatherContent }) {
   const date = new Date(weatherContent.time)
   const currentDate = new Date();

   return (
      <div className={
         (currentDate.getHours() - date.getHours() < 3 && currentDate.getHours() - date.getHours() >= 0 && currentDate.getDate() === date.getDate()) ? `${style.content_item} ${style.active}` : style.content_item
      }
      >
         <div className={style.time_day}>{weatherContent.time.slice(-5)}</div>
         <Image src={`./images/${weatherContent.condition.icon.slice(20)}`} />
         <div className={style.temp_c}>{weatherContent.temp_c ? `+${weatherContent.temp_c}` : weatherContent.temp_c}&deg;</div>
         <div className={style.feelslike_c}>{weatherContent.feelslike_c ? `+${weatherContent.feelslike_c}` : weatherContent.feelslike_c}&deg;</div>
         <div className={style.pressure_mb}>{weatherContent.pressure_mb}</div>
         <div className={style.humidity}>{weatherContent.humidity}</div>
         <div className={style.wind_kph}>{weatherContent.wind_kph}</div>
         <div className={style.chance_of_rain}>{weatherContent.chance_of_rain || '-'}</div>
      </div>
   )
}

WeatherContent.propTypes = {
   tab: PropTypes.string.isRequired,
   tabEvent: PropTypes.func.isRequired
}


function WeatherContent({ forecastWeather, tab, tabEvent }) {
   let key = 1;

   const currentWeather = forecastWeather[+tab.match(/\d/)[0]] ? forecastWeather[+tab.match(/\d/)[0]] : { hour: [] };
   const forecastContentArray = [];
   const dateForecast = new Date(currentWeather.date);

   for (let i = 0; i < currentWeather.hour.length; i++) {
      if (i % 3 === 0) {
         forecastContentArray.push(<ForecastContent key={key++} weatherContent={currentWeather.hour[i]} />)
      }
   }

   return (
      <div className={style.weather_content}>
         <div className={`${style.tabs} ${style[tab]}`}>
            {
               forecastWeather.map((forecast, index) => {
                  return (
                     <TabWeather
                        key={key++}
                        forecast={forecast}
                        numElem={index}
                        tabEvent={tabEvent}
                     />
                  )
               })
            }
         </div>
         <div className={style.content}>
            <div className={style.flex_wrapper}>
               <ul className={style.list_params}>
                  <li className={`${style.list_item} ${style.date_forecast}`}>{getDayName(dateForecast.getDay()) || null}</li>
                  <li className={`${style.list_item} ${style.date_forecast} ${style.date}`}>{getDayMounth(dateForecast.getDate()) || null}</li>
                  <li className={`${style.list_item} ${style.date_forecast} ${style.month_name}`}>{getMounthName(dateForecast.getMonth()) || null}</li>
                  <li className={style.list_item}>Температура, °C</li>
                  <li className={style.list_item}>Чувствуется как</li>
                  <li className={style.list_item}>Давление, мб</li>
                  <li className={style.list_item}>Влажность, %</li>
                  <li className={style.list_item}>Ветер, км/час</li>
                  <li className={style.list_item}>Вероятность осадков, %
                  </li>
               </ul>
               <div className={style.weather_table}>
                  <div className={style.headers}>
                     <div className={style.header}>ночь</div>
                     <div className={style.header}>утро</div>
                     <div className={style.header}>день</div>
                     <div className={style.header}>вечер</div>
                  </div>
                  <div className={style.content_wrapper}>
                     {forecastContentArray}
                  </div>
               </div>
            </div>
         </div>
      </div>
   )
}

export default WeatherContent

