import React from 'react'
import Image from '../../UI/Image';
import style from './ArticleItem.module.scss'
import { timeHasPassed } from '../../utils/date'

function ArticleItem({ cName, article, isTimeOpen }) {
   const { articles_item, link, img, description, header, article_wrapper } = cName;

   return (
      <div className={articles_item ? articles_item : style.article} >
         <div className={article_wrapper ? article_wrapper : style.article_wrapper}>
            <a
               className={link ? link : style.link}
               href={article.url}
               target="_blank"
               rel="noopener noreferrer"
            >
               <h2 className={header ? header : style.header}>{article.title}</h2>

               <Image className={img ? img : style.image} src={article.urlToImage} alt="article" />

               <div className={description ? description : style.description}>{article.description}</div>
               {
                  isTimeOpen
                     ?
                     <div className={style.time}>
                        <Image className={style.time_img} src="/images/time.png" alt="time" />
                        <p className={style.time_passed}>{timeHasPassed(Date.now() - new Date(article.publishedAt).getTime())}</p>
                     </div>
                     :
                     null
               }
            </a>
         </div>
      </div>
   )
}

export default ArticleItem
