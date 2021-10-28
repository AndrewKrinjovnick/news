import React, { useState, useEffect, memo } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams, useHistory } from 'react-router'
import Header from '../../components/Header/Header'
import Image from '../../UI/Image'
import ListItem from '../../UI/ListItem/ListItem'
import style from './SportPage.module.scss'
import { menuNames, closeMenuSport } from '../../data/SportMenuData/SportMenuData'
import { getTopArticle } from '../../api/sendRequest'
import { useFetching } from '../../hooks/useFetching'
import ArticlesList from '../../components/ArticlesList/ArticlesList'
import Loader from '../../UI/Loader/Loader'
import { getResultSearch } from '../../api/sendRequest'
import Pagination from '../../components/Pagination/Pagination'
import DropDown from '../../UI/DropDown/DropDown'
import { setNumberPage, setTotalPages, sortArticles } from '../../store/actions'
import { usePagination } from '../../hooks/usePagination'

const LIMIT = 21;

function SportPage() {
   let key = 1;
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
   const [getMainArticle, isLoadingMainArticle, errorMainArticle] = useFetching(async () => {
      const response = await getTopArticle(currentCategory);
      setMainArticle(response.articles);
   });

   const [getSportArticles, isLoadingSportArticles, errorSportArticles] = useFetching(async () => {
      const listActicles = await getResultSearch(currentCategory, page, LIMIT, sortBy);
      setSportArticles(listActicles.articles);
      const sportArticlesResults = listActicles.totalResults;
      dispatch(setTotalPages(sportArticlesResults, LIMIT));
   });

   useEffect(() => {
      getMainArticle();
   }, [nameSport])

   usePagination(getSportArticles, [sortBy, nameSport]);
   // useEffect(() => {
   //    getSportArticles();
   // }, [page, nameSport, sortBy])

   const closeOrOpenMenu = () => {
      setIsMenuOpen(!isMenuOpen);
      setIsBurgerActive(!isBurgetActive);
   }

   const openChosenCategory = (category) => {
      dispatch(setNumberPage(1))
      setIsMenuOpen(false);
      setIsBurgerActive(false);
      history.push(`/sport/${category.toLowerCase()}`);
   }

   return (
      <main className={`main ${style.main}`}>
         <Header isSearchOpen />
         <div className={style.sport_menu}>
            <div className="container">
               <div className={style.top_menu}>
                  <h2 className={style.sport_header}>
                     Sport
                  </h2>
                  <Image className={style.img} src='/images/sport.png' alt='sport' />
               </div>
            </div>
            <div className={style.bottom_menu}>
               <div className="container">
                  <nav className={style.nav}>
                     <ul className={style.menu_list}>
                        {
                           menuNames.map(li => (
                              <ListItem
                                 key={key++}
                                 cName={nameSport === li.toLowerCase() ? `${style.menu_list_item} ${style.active}` : style.menu_list_item}
                                 clickEvent={() => openChosenCategory(li)}
                              >
                                 {li}
                              </ListItem>
                           ))
                        }
                     </ul>
                     <div
                        className={isBurgetActive ? `${style.burger} ${style.active}` : style.burger}
                        onClick={closeOrOpenMenu}>
                        <span />
                     </div>
                  </nav>
               </div>
            </div>
         </div>
         <section className={style.news}>

            <div className={isMenuOpen ? `${style.close_menu} ${style.active}` : style.close_menu}>
               <div className="container">
                  <ul className={style.menu_list_close}>
                     {
                        closeMenuSport.map(li => (
                           <ListItem
                              key={key++}
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
                              ?
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
                              :
                              null
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
   )
}

export default memo(SportPage)
