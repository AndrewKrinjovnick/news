import { countPages } from "../utils/page";
import { PAGE_DECREMENT, PAGE_INCREMENT, SET_NUMBER_PAGE, SET_TOTAL_PAGES } from "./types";


const initialState = {
    number: 1,
    totalPages: 0
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

        default: return state;
    }
}