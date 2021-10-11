import React, { useState } from 'react';
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
   const { search, input, submit, img, wrapper } = cName;
   const [searchValue, setSearchValue] = useState(initialValue || '');
   const dispatch = useDispatch();

   let history = useHistory();

   const getSearchValue = (e) => {
      setSearchValue(e.target.value);
   }

   const scan = (e) => {
      if (e.key === 'Enter') {
         dispatch(getSearchInput(searchValue))
         if (history.location.pathname !== '/search') {
            history.push('/search');
         }
      }
   }

   const btnClick = () => {
      dispatch(getSearchInput(searchValue))
      if (history.location.pathname !== '/search') {
         history.push('/search');
      }
   }

   return (
      <div className={search ? `${search} ${style.search}` : style.search}>
         <div className={wrapper ? `${style.wrapper} ${wrapper}` : style.wrapper}>
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
               <img className={img ? `${img} ${style.search_image}` : style.search_image} src={"images/search.png"} />
            </button>
         </div>
      </div>
   )
}

export default SearchInput
