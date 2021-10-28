import SportPage from "../Pages/SportPage/SportPage"
import SearchPage from '../Pages/SearchPage/SearchPage'
import WeatherPage from "../Pages/WeatherPage/WeatherPage"
import MainPage from "../Pages/MainPage/MainPage"

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