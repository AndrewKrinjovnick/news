import React from 'react'
import { Link } from 'react-router-dom';
import Image from '../../UI/Image';
import ListItem from '../../UI/ListItem/ListItem';
import style from './Footer.module.scss'

function Footer() {

   return (
      <footer className={`${style.footer} footer`}>
         <div className="container">
            <div className={style.footer_top}>
               <div className={style.main}>
                  <Link
                     to='/'
                     className={`${style.link} ${style.header}`}
                  >
                     Main
                  </Link>
               </div>
               <div className={style.sport}>
                  <Link
                     to='/sport'
                     className={`${style.link} ${style.header}`}
                  >
                     Sport
                  </Link>
                  <ul className={style.list}>
                     {
                        ['football', 'tennis', 'basketball', 'golf'].map(category => (
                           <ListItem
                              key={category}
                              cName={style.list_item}
                           >
                              <Link
                                 to={`/sport/${category.toLowerCase()}`}
                                 className={style.link}
                              >
                                 {category}
                              </Link>
                           </ListItem>
                        ))
                     }
                  </ul>
               </div>
               <div className={style.weather}>
                  <Link
                     to='/weather'
                     className={`${style.link} ${style.header}`}
                  >
                     Weather
                  </Link>
               </div>
               <div className={style.sport}>
                  <Link
                     to='/sport'
                     className={`${style.link} ${style.header}`}
                  >
                     Sport
                  </Link>
                  <ul className={style.list}>
                     {
                        ['football', 'tennis', 'basketball', 'golf'].map(category => (
                           <ListItem
                              key={category}
                              cName={style.list_item}
                           >
                              <Link
                                 to={`/sport/${category.toLowerCase()}`}
                                 className={style.link}
                              >
                                 {category}
                              </Link>
                           </ListItem>
                        ))
                     }
                  </ul>
               </div>
            </div>
            <div className={style.social}>
               <a
                  href="https://t.me/Rip_boy"
                  target="_blank"
                  rel="noopener noreferrer"
               >
                  <Image className={style.img} src='/images/social/telegram.png' alt='telegram' />
               </a>
               <a
                  href="https://www.linkedin.com/in/%D0%B0%D0%BD%D0%B4%D1%80%D0%B5%D0%B9-%D0%B3%D1%80%D0%B5%D1%87%D0%BA%D0%B0%D0%BD%D1%8C-661322224/"
                  target="_blank"
                  rel="noopener noreferrer"
               >
                  <Image className={style.img} src='/images/social/linkedin.png' alt='linkedin' />
               </a>
            </div>
            <div className={style.copyright}>
               Copyright © 2021 News
            </div>
         </div>
      </footer >
   )
}

export default Footer
