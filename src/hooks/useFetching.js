import { useState } from "react";

export const useFetching = (request) => {
   const [isDataLoading, setIsDataLoading] = useState(false);
   const [error, setError] = useState();

   const fetching = async () => {
      try {
         setIsDataLoading(true);
         await request();
      }
      catch (e) {
         setError(e.message);
      }
      finally {
         setIsDataLoading(false);
      }
   }

   return [fetching, isDataLoading, error];
}