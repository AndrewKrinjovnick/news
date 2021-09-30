import React from 'react'
import { Switch, Route } from 'react-router-dom';
import MainPage from '../Pages/MainPage';

function AppRouter() {
   return (
      <Switch>
         <Route exact path="/sport">
            <div>about</div>
         </Route>
         <Route path="/">
            <MainPage />
         </Route>
      </Switch>
   )
}

export default AppRouter
