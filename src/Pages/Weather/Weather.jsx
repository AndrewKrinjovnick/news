import React from 'react';
import style from './Weather.module.scss';
import Header from '../../components/Header/Header'

function Weather() {
   return (
      <>
         <Header />
         <main className={`${style.weather} main`}>

         </main>
      </>
   )
}

export default Weather
