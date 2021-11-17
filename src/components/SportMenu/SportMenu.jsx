import React from 'react';
import PropTypes from 'prop-types';
import { menuNames } from '../../data/SportMenuData/SportMenuData';
import Image from '../../UI/Image';
import ListItem from '../../UI/ListItem/ListItem';
import style from './SportMenu.module.scss'

function SportMenu({ nameSport, openChosenCategory, isBurgetActive, closeOrOpenMenu }) {

   return (
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
                        menuNames.map((li, index) => (
                           <ListItem
                              key={index}
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
   )
}

SportMenu.propTypes = {
   nameSport: PropTypes.string.isRequired,
   openChosenCategory: PropTypes.func.isRequired,
   isBurgetActive: PropTypes.bool.isRequired,
   closeOrOpenMenu: PropTypes.func.isRequired,
}

export default SportMenu
