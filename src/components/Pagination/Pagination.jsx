import React, { memo } from 'react'
import style from './Pagination.module.scss';
import PropTypes from 'prop-types'


function Pagination({ setPage, totalPages, numberPage }) {
   const pages = [];
   let counter = 0;

   for (let i = 0; i < totalPages; i++) {
      if (totalPages > 9) {

         if (numberPage < 6) {

            if (i > 7 && i + 1 !== totalPages) {
               continue;
            }
         }
         else if (totalPages - 8 < numberPage) {
            if (i !== 0 && totalPages - 8 > i) {
               continue;
            }
         }
         else {
            if ((i !== 0 && numberPage - 4 > i) || (numberPage + 2 < i && i + 1 !== totalPages)) {
               continue;
            }
         }
      }

      pages[counter++] = (
         <li
            className={i === numberPage - 1 ? `${style.list_item} ${style.active}` : style.list_item}
            key={i}
            onClick={() => setPage(i + 1)}>
            {i + 1}
         </li>
      )
   }

   // for (let i = 0; i < totalPages; i++) {
   //    if (totalPages > 9) {

   //       if (numberPage < 6) {

   //          if (i > 7 && i + 1 !== totalPages) {
   //             continue;
   //          }
   //       }
   //       else if (totalPages - 8 < numberPage) {
   //          if (i !== 0 && totalPages - 8 > i) {
   //             continue;
   //          }
   //       }
   //       else {
   //          if ((i !== 0 && numberPage - 4 > i) || (numberPage + 2 < i && i + 1 !== totalPages)) {
   //             continue;
   //          }
   //       }
   //    }

   //    pages[counter++] = (
   //       <li
   //          className={i === numberPage - 1 ? `${style.list_item} ${style.active}` : style.list_item}
   //          key={i}
   //          onClick={() => setPage(i + 1)}>
   //          {i + 1}
   //       </li>
   //    )
   // }

   // for (let i = 0; i < totalPages; i++) {
   //    pages[i] = (
   //       <li
   //          className={i === numberPage - 1 ? `${style.list_item} ${style.active}` : style.list_item}
   //          key={i}
   //          onClick={() => setPage(i + 1)}>
   //          {i + 1}
   //       </li>
   //    )
   // }

   return (
      <ul className={style.list}>
         <li
            className={numberPage === 1 ? `${style.prev} ${style.btn} ${style.hidden}` : `${style.prev} ${style.btn}`}
            onClick={() => setPage(preState => preState - 1)}
         >
            <span>
               &#8249;
            </span>
         </li>

         {pages}

         <li
            className={numberPage === totalPages ? `${style.next} ${style.btn} ${style.hidden}` : `${style.next} ${style.btn}`}
            onClick={() => setPage(preState => preState + 1)}
         >
            <span>
               &#8250;
            </span>
         </li>
      </ul>
   )
}

Pagination.propTypes = {
   setPage: PropTypes.func.isRequired,
   totalPages: PropTypes.number.isRequired,
   numberPage: PropTypes.number.isRequired
}

export default memo(Pagination)
