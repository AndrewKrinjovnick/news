import React from 'react';
import style from './ArticleItem.module.scss';
import Image from '../../UI/Image';
import Pagination from '../Pagination/Pagination'
import { logDOM } from '@testing-library/dom';

let count = 0;

function ArticleItem({ articles }) {

   if (!articles.length) {
      return (
         <h2>Немає новин</h2>
      )
   }

   return (
      <div className={style.wrapper} key={count++}>
         {
            articles.map(article => {
               if (!article.title || !article.description || !article.url || !article.urlToImage) {
                  return null;
               }
               return (
                  <div className={style.article} key={count++}>
                     <div className={style.article_wrapper}>
                        <a
                           className={style.link}
                           href={article.url}
                           target="_blank"
                        >
                           <h2 className={style.header}>{article.title}</h2>

                           <Image className={style.image} src={article.urlToImage} alt="article" />

                           <div className={style.description}>{article.description}</div>
                        </a>
                     </div>
                  </div>
               )
            }
            )
         }
      </div>
   )
}

export default ArticleItem

