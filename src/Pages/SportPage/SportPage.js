import React, { useState, useEffect, memo, useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams, useHistory } from 'react-router'
import Header from '../../components/Header/Header'
import ListItem from '../../UI/ListItem/ListItem'
import style from './SportPage.module.scss'
import { closeMenuSport } from '../../data/SportMenuData/SportMenuData'
import { getTopArticle } from '../../api/sendRequest'
import { useFetching } from '../../hooks/useFetching'
import ArticlesList from '../../components/ArticlesList/ArticlesList'
import Loader from '../../UI/Loader/Loader'
import { getResultSearch } from '../../api/sendRequest'
import Pagination from '../../components/Pagination/Pagination'
import DropDown from '../../UI/DropDown/DropDown'
import { setNumberPage, setTotalPages, sortArticles } from '../../store/actions'
import { usePagination } from '../../hooks/usePagination'
import Footer from '../../components/Footer/Footer'
import SportMenu from '../../components/SportMenu/SportMenu'

const LIMIT = 21;

function SportPage() {
   const dispatch = useDispatch();
   const page = useSelector(state => state.page.number);
   const totalPages = useSelector(state => state.page.totalPages);
   const [mainArticle, setMainArticle] = useState([])
   const [sportArticles, setSportArticles] = useState([]);
   const sortBy = useSelector(state => state.page.sortBy);
   const [isMenuOpen, setIsMenuOpen] = useState(false);
   const [isBurgetActive, setIsBurgerActive] = useState(false);
   const { nameSport } = useParams();
   const currentCategory = nameSport === 'home' ? 'sport' : nameSport;
   const history = useHistory();

   const getMainArticleCallBack = useCallback(async () => {
      const response = await getTopArticle(currentCategory);
      setMainArticle(response.articles);
   }, [currentCategory])

   const [getMainArticle, isLoadingMainArticle, errorMainArticle] = useFetching(getMainArticleCallBack);

   useEffect(() => {
      getMainArticle();
   }, [nameSport, getMainArticle])

   const [getSportArticles, isLoadingSportArticles, errorSportArticles] = useFetching(async () => {
      const listActicles = await getResultSearch(currentCategory, page, LIMIT, sortBy);
      setSportArticles(listActicles.articles);
      const sportArticlesResults = listActicles.totalResults;
      dispatch(setTotalPages(sportArticlesResults, LIMIT));
   });



   usePagination(getSportArticles, [sortBy, nameSport]);

   const closeOrOpenMenu = () => {
      setIsMenuOpen(!isMenuOpen);
      setIsBurgerActive(!isBurgetActive);
   }

   const openChosenCategory = (category) => {
      category = category.toLowerCase();
      dispatch(setNumberPage(1))
      setIsMenuOpen(false);
      setIsBurgerActive(false);
      history.push(`/sport/${category}?q=${category}&page=1&sort=publishedA`);
   }

   return (
      <>
         <Header isSearchOpen />
         <main className={`main ${style.main}`}>
            <SportMenu
               nameSport={nameSport}
               openChosenCategory={openChosenCategory}
               isBurgetActive={isBurgetActive}
               closeOrOpenMenu={closeOrOpenMenu}
            />
            <section className={style.news}>
               <div className={isMenuOpen ? `${style.close_menu} ${style.active}` : style.close_menu}>
                  <div className="container">
                     <ul className={style.menu_list_close}>
                        {
                           closeMenuSport.map((li, index) => (
                              <ListItem
                                 key={index}
                                 cName={style.menu_list_close_item}
                                 clickEvent={() => openChosenCategory(li)}
                              >
                                 {li}
                              </ListItem>
                           ))
                        }
                     </ul>
                  </div>
               </div>

               <div className='container'>
                  <h2 className={style.header_name_sport}>{currentCategory[0].toUpperCase() + currentCategory.slice(1)}</h2>
                  {
                     isLoadingMainArticle
                        ?
                        <div className="flex-wrapper">
                           <Loader />
                        </div>
                        :
                        !errorMainArticle
                           ?

                           (
                              page === 1
                              &&
                              <ArticlesList
                                 cName={
                                    {
                                       articles_item: style.article,
                                       article_list: style.article_list,
                                       link: style.link,
                                       header: style.link_header,
                                       description: style.main_article_description
                                    }
                                 }
                                 articles={mainArticle}
                              />
                           )
                           :
                           <h2>Failed to load data</h2>
                  }
                  <div className={style.drop_down}>
                     <p className={style.filter}>Sort by</p>
                     <DropDown
                        getNewValue={(category) => dispatch(sortArticles(category))}
                        options={['publishedAt', 'popularity', 'relevancy']}
                     />
                  </div>
                  {
                     isLoadingSportArticles
                        ?
                        <div className="flex-wrapper">
                           <Loader />
                        </div>
                        :
                        !errorSportArticles
                           ?
                           <>
                              <ArticlesList articles={sportArticles} isTimeOpen />
                              <Pagination cName={style.pagination} totalPages={totalPages} numberPage={+page} />
                           </>
                           :
                           <h2>Failed to load data</h2>
                  }
               </div>
            </section>
         </main>
         <Footer />
      </>
   )
}

export default memo(SportPage)
