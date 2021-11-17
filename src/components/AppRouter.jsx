import React, { Suspense } from 'react'
import { Switch, Route } from 'react-router-dom';
import { routes } from '../router/index'
import Loader from '../UI/Loader/Loader';

function AppRouter() {
   return (
      <Switch>
         <Suspense fallback={(
            <div className="flex-wrapper">
               <Loader />
            </div>
         )}>
            {
               routes.map(route => (
                  <Route
                     key={route.path}
                     {...route}
                  />
               ))
            }

         </Suspense>
      </Switch>
   )
}

export default AppRouter
