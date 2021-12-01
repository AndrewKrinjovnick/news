import React, { memo } from 'react';
import style from './Header.module.scss';
import Image from '../../UI/Image';
import Menu from './Menu/Menu';
import { Link } from 'react-router-dom'
import SearchArticle from '../../UI/SearchArticle/SearchArticle'
import { baseUrlForImg } from '../../router';

function Header({ isSearchOpen = false }) {
   return (
      <header className={style.header}>
         <div className="container">
            <div className={style.header__wrapper}>
               <Link to='/'>
                  <Image className="logo" src={`${baseUrlForImg}logo_news.png`} alt="logo" />
               </Link>
               <Menu isSearchOpen={isSearchOpen} />
               {
                  isSearchOpen
                     ? <SearchArticle prompt={'Search news...'} />
                     : null
               }
            </div>
         </div>
      </header>
   )
}

export default memo(Header);
