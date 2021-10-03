import React from 'react';
import style from './ArticleItem.module.scss';
import Image from '../../UI/Image';

let count = 0;

function ArticleItem({ articles, cName = null }) {

   const { article_list, articles_item, link, img, description, header, article_wrapper } = cName;

   if (!articles.length) {
      return (
         <h2>Немає новин</h2>
      )
   }

   return (
      <div className={article_list ? `${style.wrapper} ${article_list}` : style.wrapper} key={count++}>
         {
            articles.map(article => {
               if (!article.title || !article.description || !article.url || !article.urlToImage) {
                  return null;
               }
               return (
                  <div className={articles_item ? articles_item : style.article} key={count++}>
                     <div className={article_wrapper ? article_wrapper : style.article_wrapper}>
                        <a
                           className={link ? link : style.link}
                           href={article.url}
                           target="_blank"
                        >
                           <h2 className={header ? header : style.header}>{article.title}</h2>

                           <Image className={img ? img : style.image} src={article.urlToImage} alt="article" />

                           <div className={description ? description : style.description}>{article.description}</div>
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

