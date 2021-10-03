import { EVERY_NEWS, LAST_NEWS, ApiKey } from './const';
import axios from 'axios';

export const lastNewsUa = async function (page, limit) {
   const response = await axios.get(LAST_NEWS, {
      params: {
         apiKey: ApiKey,
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
         apiKey: ApiKey,
         q: query,
         pageSize: limit,
         page: page,
         excludeDomains: '.ru'
      }
   })

   return response.data;
}