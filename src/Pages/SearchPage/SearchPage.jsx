import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import style from './SearchPage.module.scss';
import Header from '../../components/Header/Header';
import SearchArticle from '../../UI/SearchArticle/SearchArticle';
import ArticlesList from '../../components/ArticlesList/ArticlesList';
import { useFetching } from '../../hooks/useFetching'
import { getResultSearch } from '../../api/sendRequest'
import Loader from '../../UI/Loader/Loader';
import Pagination from '../../components/Pagination/Pagination'
import { setTotalPages } from '../../store/actions';
import { usePagination } from '../../hooks/usePagination';
import Footer from '../../components/Footer/Footer';

const LIMIT = 20;

function Search() {
   const dispatch = useDispatch();
   const page = useSelector(state => state.page.number);
   const searchValue = useSelector(state => state.search.query);
   const [articles, setActicles] = useState([]);
   const [getArticles, isArcticlesLoading, errorArticles] = useFetching(async () => {
      const listActicles = await getResultSearch(searchValue, page, LIMIT);
      setActicles(listActicles.articles);
      const searchResults = listActicles.totalResults;
      dispatch(setTotalPages(searchResults, LIMIT));
   });

   usePagination(getArticles);

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
            alertBottom={-60}
         />
         <main className={`${style.main} main`}>
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
                                    <Pagination cName={style.pagination} />
                                 </>
                              )
                              :
                              <h2>No results</h2>
                  }
               </div>
            </div>
         </main>
         <Footer />
      </>
   )
}

export default Search
