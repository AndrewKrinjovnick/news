import React from 'react'
import { Switch, Route } from 'react-router-dom';
import MainPage from '../Pages/MainPage/MainPage';
import WeatherPage from '../Pages/WeatherPage/WeatherPage';
import SearchPage from '../Pages/SearchPage/SearchPage';

function AppRouter() {
   return (
      <Switch>
         <Route exact path="/sport">
            <div>about</div>
         </Route>
         <Route exact path="/search">
            <SearchPage />
         </Route>

         <Route exact path="/weather">
            <WeatherPage />
         </Route>
         <Route exact path="/">
            <MainPage />
         </Route>
      </Switch>
   )
}

export default AppRouter
