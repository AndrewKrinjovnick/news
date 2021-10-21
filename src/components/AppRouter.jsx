import React from 'react'
import { Switch, Route } from 'react-router-dom';
import MainPage from '../Pages/MainPage/MainPage';
import WeatherPage from '../Pages/WeatherPage/WeatherPage';
import SearchPage from '../Pages/SearchPage/SearchPage';
import SportPage from '../Pages/SportPage/SportPage';

function AppRouter() {
   return (
      <Switch>
         <Route exact path="/sport/:nameSport">
            <SportPage />
         </Route>

         <Route exact path="/search/">
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
