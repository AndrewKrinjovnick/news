import { SEARCH_ARTICLE, GET_INPUT_SEARCH, GET_SEARCH_WEATHER, GET_FORECAST } from "./types";

export function getResultSEARCH(query) {
   return {
      type: SEARCH_ARTICLE,
      payload: query
   }
}

export function getSearchInput(searchValue) {
   return {
      type: GET_INPUT_SEARCH,
      payload: searchValue
   }
}

export function getWeatherInput(searchValue) {
   return {
      type: GET_SEARCH_WEATHER,
      payload: searchValue
   }
}

export function getForecastWeather(query) {
   return {
      type: GET_FORECAST,
      payload: query
   }
}