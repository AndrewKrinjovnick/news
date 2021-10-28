import { countPages } from "../utils/page";
import { IS_PUSH, PAGE_DECREMENT, PAGE_INCREMENT, SET_NUMBER_PAGE, SET_TOTAL_PAGES, SORT_BY } from "./types";


const initialState = {
    number: 1,
    totalPages: 0,
    isPush: true,
    sortBy: 'publishedAt'
}

export const pageReducer = (state = initialState, action) => {

    switch (action.type) {
        case SET_NUMBER_PAGE:
            return {
                ...state,
                number: action.payload
            }

        case PAGE_INCREMENT:
            return {
                ...state,
                number: +state.number + 1
            }

        case PAGE_DECREMENT:
            return {
                ...state,
                number: +state.number - 1
            }

        case SET_TOTAL_PAGES:
            return {
                ...state,
                totalPages: countPages(action.payload.query, action.payload.limit)
            }

        case IS_PUSH:
            return {
                ...state,
                isPush: action.payload
            }

        case SORT_BY:
            return {
                ...state,
                sortBy: action.payload
            }

        default: return state;
    }
}