import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom';
import { routes } from '../router/index'

function AppRouter() {
   return (
      <Switch>
         {
            routes.map(route => (
               <Route
                  key={route.path}
                  {...route}
               />
            ))
         }
         <Redirect to={'/'} />
      </Switch>
   )
}

export default AppRouter
