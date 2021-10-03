import React from 'react'
import { Switch, Route } from 'react-router-dom';
import MainPage from '../Pages/MainPage/MainPage';
import Weather from '../Pages/Weather/Weather';
import Search from '../Pages/Search/Search';

function AppRouter() {
   return (
      <Switch>
         <Route exact path="/sport">
            <div>about</div>
         </Route>
         <Route exact path="/search">
            <Search />
         </Route>

         <Route exact path="/weather">
            <Weather />
         </Route>
         <Route exact path="/">
            <MainPage />
         </Route>
      </Switch>
   )
}

export default AppRouter
