import { EVERY_NEWS, LAST_NEWS, ApiKeyNews, FORECAST, ApiKeyWeather } from './const';
import axios from 'axios';

export const lastNewsUa = async function (page, limit) {
   const response = await axios.get(LAST_NEWS, {
      params: {
         apiKey: ApiKeyNews,
         country: 'us',
         pageSize: limit,
         page: page
      }
   })

   return response.data;
}

export const getResultSearch = async function (query, page, limit, sortBy = "publishedAt") {
   const response = await axios.get(EVERY_NEWS, {
      params: {
         apiKey: ApiKeyNews,
         q: query,
         pageSize: limit,
         page: page,
         sortBy
      }
   })

   return response.data;
}

export const getTopArticle = async function (query) {
   const response = await axios.get(LAST_NEWS, {
      params: {
         apiKey: ApiKeyNews,
         q: query,
         pageSize: 1
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
         lang: 'en',
      }
   })

   return response.data;
}