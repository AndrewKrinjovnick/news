import { useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import PropTypes from 'prop-types';
import { getSearchInput, push, setNumberPage, sortArticles } from '../store/actions';

export const usePagination = (getArticles, dependencies = []) => {
   const dispatch = useDispatch();
   const isInitialMountPush = useRef(true);
   const isInitialMountSearch = useRef(true);
   const [searchArticle, setSearchArticle] = useState(false);
   const isPush = useSelector(state => state.page.isPush);
   const page = useSelector(state => state.page.number);
   const searchValue = useSelector(state => state.search.query);
   const sortBy = useSelector(state => state.page.sortBy);
   const history = useHistory();

   function dontPush() {
      dispatch(push(false))
   }

   useEffect(() => {
      window.addEventListener("popstate", dontPush);
      dispatch(push(false));

      return () => {
         dispatch(sortArticles('publishedAt'))
         dispatch(setNumberPage(1));
         window.removeEventListener("popstate", dontPush)
      }
   }, [])

   useEffect(() => {
      const searchParams = new URLSearchParams(history.location.search);

      if (searchParams.has('page') && +searchParams.get('page') !== page) {
         dispatch(setNumberPage(+searchParams.get('page')))
      }

      if (searchParams.has('q')) {
         setSearchArticle(!searchArticle)
         dispatch(getSearchInput(searchParams.get('q')))
      }

      if (searchParams.has('sort')) {
         dispatch(sortArticles(searchParams.get('sort')))
      }

   }, [history.location.search, ...dependencies])

   useEffect(() => {

      if (isInitialMountPush.current) {
         isInitialMountPush.current = false;
      } else {
         if (!isPush) return;
         const searchParams = new URLSearchParams();

         const params = {
            q: searchValue,
            page: page,
            sort: sortBy
         }

         for (let [key, value] of Object.entries(params)) {
            searchParams.set(key, value)
         }

         history.push({
            pathname: history.location.pathname,
            search: searchParams.toString(),
         })
      }
   }, [page]);

   useEffect(() => {
      if (isInitialMountSearch.current) {
         isInitialMountSearch.current = false;
      } else {

         if (searchValue) {
            getArticles()
         }
      }
   }, [searchArticle])
}

usePagination.propTypes = {
   getArticles: PropTypes.func.isRequired
}
