import React, { useState, useEffect, useMemo } from 'react';
import style from './MainPage.module.scss';
import { lastNewsUa } from '../api/sendRequest';
import ArticleItem from '../components/LastNews/ArticleItem';
import Loader from '../UI/Loader/Loader';
import { useFetching } from '../hooks/useFetching'
import { countPages } from '../utils/page';
import { usePagination } from '../hooks/usePagination';
import { PageContext } from '../components/Context/index'
import Pagination from '../components/Pagination/Pagination';
import Header from '../components/Header/Header'

function MainPage() {
   const limit = 2;

   const [articles, setActicles] = useState([]);
   const [page, setPage] = useState(1);
   const [totalPages, setTotalPages] = useState();
   const [getArticles, isArcticlesLoading, errorArticles] = useFetching(async () => {
      const listActicles = await lastNewsUa(page, limit);
      setActicles(listActicles.articles);
      const searchResults = listActicles.totalResults;
      setTotalPages(countPages(searchResults, limit));
   });

   useEffect(() => {
      getArticles();
   }, [page])

   if (errorArticles) {
      return (
         <div className="container">
            <h2>Не вдалося завантажити дані, помилка "{errorArticles}"</h2>
         </div>
      )
   }

   return (

      <div className={style.list__news} >
         <Header />
         <div className="container">
            {
               isArcticlesLoading ?
                  <div className="flex-wrapper">
                     <Loader />
                  </div>
                  :
                  <div className="Actual_news">
                     <ArticleItem articles={articles} />
                     {
                        articles.length
                           ? <Pagination setPage={setPage} totalPages={totalPages} numberPage={page} />
                           : null
                     }
                  </div>
            }
         </div>
      </div>

   )
}

export default MainPage
