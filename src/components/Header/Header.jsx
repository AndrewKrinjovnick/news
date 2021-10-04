import React, { memo } from 'react';
import style from './Header.module.scss';
import Image from '../../UI/Image';
import Menu from './Menu/Menu';
import { Link } from 'react-router-dom'
import SearchArticle from '../../UI/SearchArticle/SearchArticle'

function Header({ isSearchOpen }) {
   return (
      <header className={style.header}>
         <div className="container">
            <div className={style.header__wrapper}>
               <Link to='/'>
                  <Image className="logo" src="/images/logo.png" alt="logo" />
               </Link>
               <Menu isSearchOpen={isSearchOpen} />
               {
                  isSearchOpen
                     ? <SearchArticle />
                     : null
               }

            </div>
         </div>
      </header>
   )
}

export default memo(Header);
