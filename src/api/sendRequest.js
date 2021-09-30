import { NEWS_URL, LAST_NEWS, ApiKey } from './const';
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