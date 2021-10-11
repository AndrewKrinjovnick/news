import React from 'react'
import Image from '../../UI/Image'
import style from './MainNews.module.scss'

function MainNews({ article }) {
   return (
      <div className={style.main_new}>
         <h3 className={style.header}></h3>
         <Image />
         <p className={style.description}></p>
      </div>
   )
}

export default MainNews
