import React from 'react'
import { Link } from 'react-router-dom';
import { footerColumns, footerNamesSport } from '../../data/FooterData';
import ListItem from '../../UI/ListItem/ListItem';
import FooterColumn from '../FooterColumn/FooterColumn';
import Social from '../Social/Social';
import style from './Footer.module.scss'

function Footer() {

   return (
      <footer className={`${style.footer} footer`}>
         <div className="container">
            <div className={style.footer_top}>
               {
                  footerColumns.map((column, index) => (
                     <FooterColumn
                        key={index}
                        cName={{
                           column: style.column,
                           header: style.header,
                           link: style.link
                        }}
                        headerName={column.header}
                        path={column.path}
                     >
                        {
                           column.header !== 'Sport'
                           ||
                           <ul className={style.list}>
                              {
                                 footerNamesSport.map(category => (
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
                        }
                     </FooterColumn>
                  ))
               }
            </div>
            <Social />
            <div className={style.copyright}>
               Copyright © 2021 News
            </div>
         </div>
      </footer >
   )
}

export default Footer
