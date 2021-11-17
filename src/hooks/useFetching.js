import { useCallback, useState } from "react";

export const useFetching = (request) => {
   const [isDataLoading, setIsDataLoading] = useState(false);
   const [error, setError] = useState();

   const fetching = useCallback(async () => {
      try {
         setError('');
         setIsDataLoading(true);
         await request();
      }
      catch (e) {
         setError(e.message);
      }
      finally {
         setIsDataLoading(false);
      }
   }, [request])

   return [fetching, isDataLoading, error];
}