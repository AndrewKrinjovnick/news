import { EVERY_NEWS, LAST_NEWS, ApiKeyNews, FORECAST, ApiKeyWeather } from './const';
import axios from 'axios';

export const lastNewsUa = async function (page, limit) {
   const response = await axios.get(LAST_NEWS, {
      params: {
         apiKey: ApiKeyNews,
         country: 'ua',
         pageSize: limit,
         page: page
      }
   })

   return response.data;
}

export const getResultSearch = async function (query, page, limit) {
   const response = await axios.get(EVERY_NEWS, {
      params: {
         apiKey: ApiKeyNews,
         q: query,
         pageSize: limit,
         page: page
      }
   })

   return response.data;
}

export const getResultWeather = async function (query) {
   const response = await axios.get(FORECAST, {
      params: {
         key: ApiKeyWeather,
         q: query,
         days: 10,
         lang: 'ru',
         q: query
      }
   })

   return response.data;
}