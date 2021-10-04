import { combineReducers } from "redux";
import { searchReducer } from "./searchReducer";
import { weatherReducer } from "./weatherReducer";

export const rootReducer = combineReducers({
   search: searchReducer,
   weather: weatherReducer
})
