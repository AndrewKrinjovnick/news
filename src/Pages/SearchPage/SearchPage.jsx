import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import style from './SearchPage.module.scss';
import Header from '../../components/Header/Header';
import SearchArticle from '../../UI/SearchArticle/SearchArticle';
import ArticleItem from '../../components/LastNews/ArticleItem';
import { useFetching } from '../../hooks/useFetching'
import { getResultSearch } from '../../api/sendRequest'
import { countPages } from '../../utils/page'
import Loader from '../../UI/Loader/Loader';
import Pagination from '../../components/Pagination/Pagination'

function Search() {
   const limit = 20;
   const [articles, setActicles] = useState([]);
   const searchValue = useSelector(state => state.search.search);
   const [page, setPage] = useState(sessionStorage.getItem('pageSearch') ? sessionStorage.getItem('page') : 1);
   const [totalPages, setTotalPages] = useState();
   const [getArticles, isArcticlesLoading, errorArticles] = useFetching(async () => {
      const listActicles = await getResultSearch(searchValue, page, limit);
      setActicles(listActicles.articles);
      const searchResults = listActicles.totalResults;
      setTotalPages(countPages(searchResults, limit));
   });

   useEffect(() => {
      if (searchValue) {
         getArticles()
         sessionStorage.setItem('pageSearch', page);
      }
   }, [searchValue, page])

   if (errorArticles) {
      return (
         <div className="container">
            <h2>Не вдалося завантажити дані, помилка "{errorArticles}"</h2>
         </div>
      )
   }

   return (
      <>
         <Header />
         <SearchArticle cName={
            {
               search: style.search,
               input: style.input,
               img: style.img,
               submit: style.submit,
               wrapper: style.wrapper
            }
         }
            initialValue={searchValue}
         />
         <main className="main">
            <div className="container">
               <div className="search_result">
                  {
                     isArcticlesLoading
                        ?
                        <div className="flex-wrapper">
                           <Loader />
                        </div>
                        :
                        (
                           <>
                              <ArticleItem
                                 cName={
                                    {
                                       img: style.img,
                                       article_list: style.article_list,
                                       articles_item: style.article_item,
                                       header: style.header,
                                       link: style.link,
                                       description: style.description,
                                       article_wrapper: style.article_wrapper
                                    }
                                 }
                                 articles={[]}
                              />
                              {
                                 articles.length
                                    ? <Pagination cName={style.pagination} setPage={setPage} totalPages={totalPages} numberPage={+page} />
                                    : null
                              }
                           </>
                        )
                  }
               </div>
            </div>
         </main>
      </>
   )
}

export default Search
