import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getForecastWeather } from '../../store/actions'
import style from './Weather.module.scss';
import Header from '../../components/Header/Header'
import { useFetching } from '../../hooks/useFetching';
import { getResultWeather } from '../../api/sendRequest';
import WeatherContent from '../../components/WeatherContent/WeatherContent'

function Weather() {
   const [searchWeather, setSearchWeather] = useState('Киев');
   const [currentCityWeather, setCurrentCityWeather] = useState([]);
   const [getWeather, isLoading, errorFetch] = useFetching(async () => {
      const response = await getResultWeather(searchWeather);
      setCurrentCityWeather(response.forecast.forecastday);
      dispatch(getForecastWeather(response.forecast.forecastday))
      console.log(response)
   });

   let dispatch = useDispatch();

   useEffect(() => {
      getWeather();
   }, [])

   return (
      <>
         <Header isSearchOpen />
         <main className={`main`}>
            <div className="container">
               <h2 className={style.header}>Погода Украины</h2>
               <div className={style.current_city}>{searchWeather}, прогноз погоды</div>
               <WeatherContent forecastWeather={currentCityWeather} />
            </div>
         </main>
      </>
   )
}

export default Weather
