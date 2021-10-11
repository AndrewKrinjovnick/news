import React, { useState } from 'react'
import { useParams, useHistory } from 'react-router'
import Header from '../../components/Header/Header'
import Image from '../../UI/Image'
import ListItem from '../../UI/ListItem/ListItem'
import style from './SportPage.module.scss'
import { menuNames } from '../../data/SportMenuData/SportMenuData'
import MainNews from '../../components/MainNews/MainNews'


let key = 1;

function SportPage() {
   const [isBurgetActive, setIsBurgerActive] = useState(false);
   const sportName = useParams();
   const history = useHistory();
   console.log(sportName)
   return (
      <main className="main">
         <Header isSearchOpen />
         <div className={style.sport_menu}>
            <div className="container">
               <div className={style.top_menu}>
                  <h2 className={style.sport_header}>
                     Sport
                  </h2>
                  <Image className={style.img} src='../images/sport.png' alt='sport' />
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
                                 cName={style.menu_list_item}
                                 clickEvent={() => history.push(`/sport/${li.toLowerCase()}`)}
                              >
                                 {li}
                              </ListItem>
                           ))
                        }
                     </ul>
                     <div className={isBurgetActive ? `${style.burger} ${style.active}` : style.burger} onClick={() => setIsBurgerActive(!isBurgetActive)}>
                        <span />
                     </div>
                  </nav>
               </div>
            </div>
         </div>
         <div className='container'>
            <MainNews />
         </div>
      </main>
   )
}

export default SportPage
