import React from 'react';
import PropTypes from 'prop-types'
import style from './ArticlesList.module.scss';
import Image from '../../UI/Image';
import { timeHasPassed } from '../../utils/date'

let count = 0;

function Articles({ articles, cName = {}, isTimeOpen = false }) {
   const { article_list, articles_item, link, img, description, header, article_wrapper } = cName;

   return (
      <div className={article_list ? `${article_list}` : style.wrapper} key={count++}>
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
            )
         }
      </div>
   )
}

Articles.propTypes = {
   cName: PropTypes.objectOf(PropTypes.string)
}

export default Articles

