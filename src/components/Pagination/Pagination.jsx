import React, { memo } from 'react'
import style from './Pagination.module.scss';
import PropTypes from 'prop-types'

Pagination.propTypes = {
   cName: PropTypes.string,
   setPage: PropTypes.func.isRequired,
   totalPages: PropTypes.number.isRequired,
   numberPage: PropTypes.number.isRequired
}

function Pagination({ setPage, totalPages, numberPage, cName }) {
   const pages = [];
   let counter = 0;
   const countPages = 9;

   for (let i = 1; i <= totalPages; i++) {
      if (totalPages > countPages) {

         if (numberPage <= ((countPages / 2) + 0.5)) {

            if (i > countPages - 1 && i !== totalPages) {
               continue;
            }
         }

         else if (totalPages - (countPages - 1) < numberPage) {
            if (i !== 1 && totalPages - (countPages - 1) >= i) {
               continue;
            }
         }
         else {
            if ((i !== 1 && numberPage - ((countPages - 3) / 2) > i) || (numberPage + ((countPages - 3) / 2) < i && i !== totalPages)) {
               continue;
            }
         }
      }

      pages[counter++] = (
         <li
            className={i === numberPage ? `${style.list_item} ${style.active}` : style.list_item}
            key={i}
            onClick={() => setPage(i)}>
            {i}
         </li>
      )
   }

   return (
      <ul className={`${style.list} ${cName}`}>
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

export default memo(Pagination)
