import { combineReducers } from "redux";
import { searchReducer } from "./searchReducer";
import { pageReducer } from "./pageReducer";

export const rootReducer = combineReducers({
   search: searchReducer,
   page: pageReducer
})
