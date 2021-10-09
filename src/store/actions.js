import { SEARCH_ARTICLE, GET_INPUT_SEARCH } from "./types";

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
