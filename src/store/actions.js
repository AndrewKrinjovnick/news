import { SEARCH_ARTICLE, GET_INPUT_SEARCH, SET_NUMBER_PAGE, PAGE_INCREMENT, PAGE_DECREMENT, SET_TOTAL_PAGES } from "./types";

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

export function setNumberPage(page) {
   return {
      type: SET_NUMBER_PAGE,
      payload: page
   }
}

export function pageIncrement() {
   return {
      type: PAGE_INCREMENT
   }
}

export function pageDecrement() {
   return {
      type: PAGE_DECREMENT
   }
}

export function setTotalPages(query, limit) {
   return {
      type: SET_TOTAL_PAGES,
      payload: {
         query,
         limit
      }
   }
}

