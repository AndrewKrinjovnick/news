import React, { useState, useEffect, useMemo } from 'react';
import style from './MainPage.module.scss';
import { lastNewsUa } from '../../api/sendRequest';
import ArticleItem from '../../components/LastNews/ArticleItem';
import Loader from '../../UI/Loader/Loader';
import { useFetching } from '../../hooks/useFetching'
import { countPages } from '../../utils/page';
import Pagination from '../../components/Pagination/Pagination';
import Header from '../../components/Header/Header'

function MainPage() {
   const limit = 21;

   const [articles, setActicles] = useState([]);
   const [page, setPage] = useState(sessionStorage.getItem('page') ? sessionStorage.getItem('page') : 1);
   const [totalPages, setTotalPages] = useState();
   const [getArticles, isArcticlesLoading, errorArticles] = useFetching(async () => {
      const listActicles = await lastNewsUa(page, limit);
      setActicles(listActicles.articles);
      const searchResults = listActicles.totalResults;
      setTotalPages(countPages(searchResults, limit));
   });

   useEffect(() => {
      getArticles();
      sessionStorage.setItem('page', page)
   }, [page])

   if (errorArticles) {
      return (
         <div className="container">
            <h2>Не вдалося завантажити дані, помилка "{errorArticles}"</h2>
         </div>
      )
   }

   return (

      <>
         <Header isSearchOpen />
         <main className="main">
            <div className="container">
               {
                  isArcticlesLoading ?
                     <div className="flex-wrapper">
                        <Loader />
                     </div>
                     :
                     <div className={style.actual_news}>
                        <ArticleItem
                           cName={
                              {
                                 article_list: style.article
                              }
                           }
                           articles={[]}
                        />
                        {
                           articles.length
                              ? <Pagination cName={style.pagination} setPage={setPage} totalPages={totalPages} numberPage={+page} />
                              : null
                        }
                     </div>
               }
            </div>
         </main>
      </>

   )
}

export default MainPage
