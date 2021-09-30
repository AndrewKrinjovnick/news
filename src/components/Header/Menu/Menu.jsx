import React from 'react';
import style from './Menu.module.scss';
import { NavLink } from 'react-router-dom'

function Menu() {
   return (
      <nav className={style.menu}>
         <ul className={style.list}>
            <li className={style.list__item}>
               <NavLink className={style.link} to='/sport'>
                  Sport
               </NavLink>
            </li>
            <li className={style.list__item}>
               <NavLink className={style.link} to='/covid'>
                  Covid
               </NavLink>
            </li>
         </ul>
      </nav>
   )
}

export default Menu
