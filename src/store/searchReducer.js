import { SEARCH_ARTICLE, GET_INPUT_SEARCH } from "./types";

const initialState = {
   search: '',
   articles: []
}

export const searchReducer = (state = initialState, action) => {

   switch (action.type) {
      case GET_INPUT_SEARCH:
         return {
            ...state,
            search: action.payload
         }
      case SEARCH_ARTICLE:
         return {
            ...state,
            articles: [...action.payload]
         }
      default: return state;
   }
}