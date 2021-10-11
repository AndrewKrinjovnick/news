import React, { useState, useEffect, useRef } from 'react';
import style from './MainPage.module.scss';
import { lastNewsUa } from '../../api/sendRequest';
import ArticleItem from '../../components/LastNews/ArticleItem';
import Loader from '../../UI/Loader/Loader';
import { useFetching } from '../../hooks/useFetching'
import { countPages } from '../../utils/page';
import Header from '../../components/Header/Header'
import { useObserver } from '../../hooks/useObserver'

const LIMIT = 18;

function MainPage() {
   const lastElem = useRef();
   const [articles, setActicles] = useState([]);
   const [page, setPage] = useState(1);
   const [totalPages, setTotalPages] = useState();
   const [getArticles, isArcticlesLoading, errorArticles] = useFetching(async () => {
      const listActicles = await lastNewsUa(page, LIMIT);
      setActicles([...articles, ...listActicles.articles]);
      const searchResults = listActicles.totalResults;
      setTotalPages(countPages(searchResults, LIMIT));
   });

   useObserver(() => setPage(page + 1), lastElem, isArcticlesLoading, page < totalPages)

   useEffect(() => {
      getArticles();
   }, [page])

   return (
      <>
         <Header isSearchOpen />
         <main className="main">
            <div className="container">
               {
                  errorArticles
                     ?
                     <div className="container">
                        <h2>Не удалось загрузить данные. {errorArticles}"</h2>
                     </div>
                     :
                     <div className={style.actual_news}>
                        <ArticleItem
                           cName={
                              {
                                 article_list: style.article
                              }
                           }
                           articles={articles}
                        />
                     </div>
               }

               {
                  isArcticlesLoading
                     ?
                     <div className="flex-wrapper">
                        <Loader />
                     </div>
                     :
                     articles.length
                        ?
                        null
                        :
                        <h2>Нет новостей</h2>
               }

               <div className={style.last_element} ref={lastElem}></div>
            </div>
         </main>
      </>
   )
}

export default MainPage
