import React from 'react';
import style from './Header.module.scss';
import Image from '../../UI/Image';
import Menu from './Menu/Menu';
import { Link } from 'react-router-dom'
import SearchInput from '../../UI/SearchInput/SearchInput'

function Header() {
   return (
      <header className={style.header}>
         <div className="container">
            <div className={style.header__wrapper}>
               <Link to='/'>
                  <Image className="logo" src="/images/logo.png" alt="logo" />
               </Link>
               <Menu />
               <SearchInput />
            </div>
         </div>
      </header>
   )
}

export default Header;
