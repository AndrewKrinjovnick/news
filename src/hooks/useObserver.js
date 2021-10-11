import { useRef, useEffect } from 'react'

export const useObserver = (callback, ref, isLoading, condition) => {
   const observer = useRef();
   useEffect(() => {
      if (isLoading) return;
      if (observer.current) observer.current.disconnect();
      const callbackObserver = function (entries) {

         if (entries[0].isIntersecting && condition) {
            callback()
         }
      };
      observer.current = new IntersectionObserver(callbackObserver);
      observer.current.observe(ref.current);
   }, [isLoading])
}
