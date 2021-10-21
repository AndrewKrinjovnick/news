import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router';
import style from './SearchPage.module.scss';
import Header from '../../components/Header/Header';
import SearchArticle from '../../UI/SearchArticle/SearchArticle';
import ArticlesList from '../../components/ArticlesList/ArticlesList';
import { useFetching } from '../../hooks/useFetching'
import { getResultSearch } from '../../api/sendRequest'
import { countPages } from '../../utils/page'
import Loader from '../../UI/Loader/Loader';
import Pagination from '../../components/Pagination/Pagination'
import { setNumberPage, setTotalPages } from '../../store/actions';

const LIMIT = 20;

function Search() {
   const dispatch = useDispatch();
   const page = useSelector(state => state.page.number);
   const searchValue = useSelector(state => state.search.search);
   const totalPages = useSelector(state => state.page.totalPages);
   const history = useHistory();
   //const [page, setPage] = useState(1);
   const [articles, setActicles] = useState([]);
   //const [totalPages, setTotalPages] = useState();
   const [getArticles, isArcticlesLoading, errorArticles] = useFetching(async () => {
      const listActicles = await getResultSearch(searchValue, page, LIMIT);
      setActicles(listActicles.articles);
      const searchResults = listActicles.totalResults;
      dispatch(setTotalPages(searchResults, LIMIT));
   });

   useEffect(() => {
      if (searchValue) {
         dispatch(setNumberPage(1))
         getArticles()
      }
   }, [searchValue])

   useEffect(() => {
      getArticles()
   }, [page])

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
                        errorArticles
                           ?
                           <div className="container">
                              <h2>Failed to load data, error "{errorArticles}"</h2>
                           </div>
                           :
                           articles.length
                              ?
                              (
                                 <>
                                    <ArticlesList
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
                                       articles={articles}
                                    />
                                    <Pagination cName={style.pagination} totalPages={totalPages} numberPage={+page} />
                                 </>
                              )
                              :
                              <h2>No results</h2>
                  }
               </div>
            </div>
         </main>
      </>
   )
}

export default Search
