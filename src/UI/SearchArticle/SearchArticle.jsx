import React, { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import { useHistory } from "react-router-dom";
import style from './SearchArticle.module.scss';
import Image from '../Image';
import WrongData from '../WrongData/WrongData';
import { useDispatch, useSelector } from 'react-redux';
import { getSearchInput } from '../../store/actions';

let timeout;

function SearchInput({ cName, initialValue = '', prompt, alertBottom = -75 }) {
   const dispatch = useDispatch();
   const query = useSelector(state => state.search.query)
   const { search, input, submit, img, wrapper } = cName;
   const [isOpen, setIsOpen] = useState(false);
   const [searchValue, setSearchValue] = useState('');
   const sortBy = useSelector(state => state.page.sortBy);
   const searchBlock = useRef();
   let history = useHistory();

   useEffect(() => {
      if (!searchValue) setSearchValue(initialValue);
   }, [query, initialValue, searchValue])

   const getSearchValue = (e) => {
      setSearchValue(e.target.value);
   }

   useEffect(() => {
      return () => {
         clearTimeout(timeout);
      }
   }, [])

   const scan = (e) => {
      if (e.key === 'Enter' || e.type === 'click') {
         if (searchValue.trim()) {
            dispatch(getSearchInput(searchValue));
            history.push({
               pathname: '/search',
               search: `?q=${searchValue}&page=${1}&sort=${sortBy}`
            });
         }
         else {
            if (searchBlock.current) {
               setIsOpen(!isOpen);
               setSearchValue('');
               clearTimeout(timeout)
               searchBlock.current.style.outline = '2px solid red'
               timeout = setTimeout(() => {
                  searchBlock.current.style.outline = 'none'
               }, 1000)
            }
         }
      }

   }

   return (
      <div className={search ? `${search} ${style.search}` : style.search} >
         <WrongData
            message="Empty field"
            style={
               {
                  bottom: alertBottom
               }
            }
            direction='bottom'
            timer={true}
            open={isOpen}
         >
            <div
               className={wrapper ? `${style.wrapper} ${wrapper}` : style.wrapper}
               ref={searchBlock}
            >

               <input
                  className={input ? `${input} ${style.input}` : style.input}
                  value={searchValue}
                  placeholder={prompt || 'Search...'}
                  onChange={getSearchValue}
                  onKeyDown={scan}
                  autoFocus={history.location.pathname === '/search' ? true : false}
               />

               <button
                  className={submit ? `${submit} ${style.submit}` : style.submit}
                  onClick={scan}
               >
                  <Image className={img ? `${img} ${style.search_image}` : style.search_image} src={"/images/search.png"} alt={'search'} />
               </button>
            </div>
         </WrongData>
      </div>
   )
}

SearchInput.propTypes = {
   cName: PropTypes.objectOf(PropTypes.string),
   initialValue: PropTypes.string,
   prompt: PropTypes.string
}

SearchInput.defaultProps = {
   cName: {}
}

export default SearchInput
