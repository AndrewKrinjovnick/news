import React, { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import { useHistory } from "react-router-dom";
import { useDispatch } from 'react-redux';
import style from './SearchArticle.module.scss';
import Image from '../Image';
import { getSearchInput } from '../../store/actions'

SearchInput.propTypes = {
   cName: PropTypes.objectOf(PropTypes.string),
}

SearchInput.defaultProps = {
   cName: {}
}


function SearchInput({ cName, initialValue, prompt }) {
   let timeout;
   const { search, input, submit, img, wrapper } = cName;
   const searchBlock = useRef();
   const [searchValue, setSearchValue] = useState(initialValue || '');
   const dispatch = useDispatch();

   let history = useHistory();

   const getSearchValue = (e) => {
      setSearchValue(e.target.value);
   }

   useEffect(() => {
      return () => {
         clearTimeout(timeout);
      }
   }, [])

   const scan = (e) => {
      if (e.key === 'Enter') {
         if (searchValue.trim()) {

            dispatch(getSearchInput(searchValue))
            if (history.location.pathname !== '/search') {
               history.push('/search');
            }
         }
         else {
            if (searchBlock.current) {
               setSearchValue('');
               searchBlock.current.style.outline = '2px solid red'
               timeout = setTimeout(() => {
                  searchBlock.current.style.outline = 'none'
               }, 1000)
            }
         }
      }

   }

   const btnClick = (e) => {
      if (searchValue.trim()) {
         dispatch(getSearchInput(searchValue))
         if (history.location.pathname !== '/search') {
            history.push('/search');
         }
      }
      else {
         if (searchBlock.current) {
            setSearchValue('');
            searchBlock.current.style.outline = '2px solid red'
            timeout = setTimeout(() => {
               searchBlock.current.style.outline = 'none'
            }, 1000)
         }
      }
   }

   return (
      <div className={search ? `${search} ${style.search}` : style.search} >
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
            >

            </input>
            <button className={submit ? `${submit} ${style.submit}` : style.submit} onClick={btnClick}>
               <Image className={img ? `${img} ${style.search_image}` : style.search_image} src={"/images/search.png"} alt={'search'} />
            </button>
         </div>
      </div>
   )
}

export default SearchInput
