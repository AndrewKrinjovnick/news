import { useMemo } from "react";

export const usePagination = (pages) => {
   const result = [];

   const numPages = useMemo(() => {
      for (let i = 0; i < pages; i++) {
         result.push(i + 1);
      }

      return result;
   }, [pages])

   return numPages;
}