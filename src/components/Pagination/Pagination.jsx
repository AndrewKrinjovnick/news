import React, { memo, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import style from './Pagination.module.scss';
import PropTypes from 'prop-types'
import { useDispatch } from 'react-redux';
import { pageDecrement, pageIncrement, push, setNumberPage } from '../../store/actions';
import classNames from 'classnames';

const COUNTER_PAGE = 9;

function Pagination({ cName }) {
   const [pages, setPages] = useState([]);
   const totalPages = useSelector(state => state.page.totalPages);
   const numberPage = useSelector(state => state.page.number);
   let counter = 0;
   const dispatch = useDispatch();

   const firstPageStyle = classNames({
      [style.btn]: true,
      [style.prev]: true,
      [style.hidden]: numberPage === 1,

   })

   const lastPageStyle = classNames({
      [style.btn]: true,
      [style.next]: true,
      [style.hidden]: numberPage === totalPages,

   })

   const listStyle = classNames({
      [cName]: cName,
      [style.list]: true,
   })


   useEffect(() => {
      const updatePages = [];
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

         updatePages[counter++] = (
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

      setPages(updatePages)
   }, [totalPages, numberPage, counter, dispatch])


   return (
      <ul className={listStyle}>
         <li
            className={firstPageStyle}
            onClick={() => {
               dispatch(push(true))
               dispatch(pageDecrement())
            }}
         >
            <span>
               &#8249;
            </span>
         </li>

         {pages}

         <li
            className={lastPageStyle}
            onClick={() => {
               dispatch(push(true))
               dispatch(pageIncrement())
            }}
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
