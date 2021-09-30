import React from 'react';
import style from './SearchInput.module.scss';
import Image from '../Image'

function SearchInput() {
   return (
      <div className={style.search}>
         <input className={style.input}>

         </input><button className={style.submit}>
            <Image className={style.search_image} src={"./images/search.png"} />
         </button>
      </div>
   )
}

export default SearchInput
