import { createContext } from "react";

export const PageContext = createContext({
   totalPages: [],
   clickEvent: () => { }
});