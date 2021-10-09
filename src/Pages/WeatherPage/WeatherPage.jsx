import React, { useState, useEffect } from 'react';
import style from './WeatherPage.module.scss';
import Header from '../../components/Header/Header'
import { useFetching } from '../../hooks/useFetching';
import { getResultWeather } from '../../api/sendRequest';
import WeatherContent from '../../components/WeatherContent/WeatherContent'
import Loader from '../../UI/Loader/Loader';
import SearchInput from '../../UI/SearchInput/SearchInput';
import Image from '../../UI/Image';

function WeatherPage() {
   const [searchWeather, setSearchWeather] = useState('Киев');
   const [tab, setTab] = useState('tab0');
   const [currentCityWeather, setCurrentCityWeather] = useState([]);
   const [getWeather, isLoading, errorFetch] = useFetching(async () => {
      const response = await getResultWeather(searchWeather);
      setCurrentCityWeather(response.forecast.forecastday);
   });

   useEffect(() => {
      getWeather();
   }, [searchWeather])

   return (
      <>
         <Header isSearchOpen />
         <main className={`main`}>
            <div className="container">
               <h2 className={style.header}>Погода Украины</h2>
               <div className={style.current_city}>{searchWeather[0].toUpperCase() + searchWeather.toLowerCase().slice(1)}, прогноз погоды</div>
               <SearchInput startValue={'Киев'} search={setSearchWeather} />
               {
                  isLoading
                     ?
                     <div className="flex-wrapper">
                        <Loader />
                     </div>
                     :
                     errorFetch
                        ?
                        <div className={style.error}>
                           <h3>Не удалось найти прогноз по вашему запросу</h3>
                           <Image src={'./images/map.jpg'} alt="карта" />
                        </div>
                        :
                        <WeatherContent forecastWeather={currentCityWeather} tab={tab} tabEvent={setTab} />
               }
            </div>
         </main>
      </>
   )
}

export default WeatherPage
