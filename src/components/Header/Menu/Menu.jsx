import React from 'react';
import style from './Menu.module.scss';
import { NavLink } from 'react-router-dom'

function Menu() {
   return (
      <nav className={style.menu}>
         <ul className={style.list}>
            <li className={style.list__item}>
               <NavLink
                  activeClassName={style.selected}
                  className={style.link}
                  to='/sport/home/?q=sport&page=1&sort=publishedAt'
               >
                  Sport
               </NavLink>
            </li>
            <li className={style.list__item}>
               <NavLink
                  activeClassName={style.selected}
                  className={style.link}
                  to='/weather'
               >
                  Weather
               </NavLink>
            </li>
         </ul>
      </nav>
   )
}

export default Menu
