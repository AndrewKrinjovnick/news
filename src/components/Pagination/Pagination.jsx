import React, { memo } from 'react';
import { useSelector } from 'react-redux';
import style from './Pagination.module.scss';
import PropTypes from 'prop-types'
import { useDispatch } from 'react-redux';
import { pageDecrement, pageIncrement, push, setNumberPage } from '../../store/actions';

const COUNTER_PAGE = 9;

function Pagination({ cName }) {
   const pages = [];
   const totalPages = useSelector(state => state.page.totalPages);
   const numberPage = useSelector(state => state.page.number);
   let counter = 0;
   const dispatch = useDispatch();

   for (let i = 1; i <= totalPages; i++) {
      if (totalPages > COUNTER_PAGE) {

         if (numberPage <= ((COUNTER_PAGE / 2) + 0.5)) {

            if (i > COUNTER_PAGE - 1 && i !== totalPages) {
               continue;
            }
         }

         else if (totalPages - (COUNTER_PAGE - 1) < numberPage) {
            if (i !== 1 && totalPages - (COUNTER_PAGE - 1) >= i) {
               continue;
            }
         }
         else {
            if ((i !== 1 && numberPage - ((COUNTER_PAGE - 3) / 2) > i) || (numberPage + ((COUNTER_PAGE - 3) / 2) < i && i !== totalPages)) {
               continue;
            }
         }
      }

      pages[counter++] = (
         <li
            className={i === numberPage ? `${style.list_item} ${style.active}` : style.list_item}
            key={i}
            onClick={() => {
               dispatch(push(true))
               dispatch(setNumberPage(i))
            }}
         >
            {i}
         </li>
      )
   }

   return (
      <ul className={cName ? `${style.list} ${cName}` : style.list}>
         <li
            className={numberPage === 1 ? `${style.prev} ${style.btn} ${style.hidden}` : `${style.prev} ${style.btn}`}
            onClick={() => dispatch(pageDecrement())}
         >
            <span>
               &#8249;
            </span>
         </li>

         {pages}

         <li
            className={numberPage === totalPages ? `${style.next} ${style.btn} ${style.hidden}` : `${style.next} ${style.btn}`}
            onClick={() => dispatch(pageIncrement())}
         >
            <span>
               &#8250;
            </span>
         </li>
      </ul>
   )
}

Pagination.propTypes = {
   cName: PropTypes.string
}

export default memo(Pagination)
