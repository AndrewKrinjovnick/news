import { GET_SEARCH_WEATHER, GET_FORECAST } from "./types";

const initialState = {
   searchForecast: '',
   forecast: []
}

export const weatherReducer = (state = initialState, action) => {

   switch (action.type) {
      case GET_SEARCH_WEATHER:
         return {
            ...state,
            searchForecast: action.payload
         }

      case GET_FORECAST:
         return {
            ...state,
            forecast: [...action.payload]
         }

      default: return state;
   }
}