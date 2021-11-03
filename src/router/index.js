import React from 'react';
import SearchPage from '../Pages/SearchPage/SearchPage'
import MainPage from "../Pages/MainPage/MainPage"

const SportPage = React.lazy(() => import("../Pages/SportPage/SportPage"));
const WeatherPage = React.lazy(() => import("../Pages/WeatherPage/WeatherPage"));

export const routes = [
   {
      path: '/sport/:nameSport',
      exact: true,
      component: SportPage
   },
   {
      path: '/search',
      exact: true,
      component: SearchPage
   },
   {
      path: '/weather',
      exact: true,
      component: WeatherPage
   },
   {
      path: '/',
      exact: true,
      component: MainPage
   }
]