import React from 'react';
import PropTypes from 'prop-types'
import style from './ArticlesList.module.scss';
import ArticleItem from '../ArticleItem/ArticleItem';



function Articles({ articles, cName = {}, isTimeOpen = false }) {
   let count = 0;
   const { article_list } = cName;

   return (
      <div
         className={article_list ? `${article_list}` : style.wrapper}
      >
         {
            articles.map(article => {
               if (!article.title || !article.description || !article.url || !article.urlToImage) {
                  return null;
               }
               return (

                  <ArticleItem
                     key={count++}
                     cName={cName}
                     article={article}
                     isTimeOpen={isTimeOpen}
                  />
               )
            }
            )
         }
      </div>
   )
}

Articles.propTypes = {
   cName: PropTypes.objectOf(PropTypes.string),
   isTimeOpen: PropTypes.bool,
   articles: PropTypes.arrayOf(
      PropTypes.shape({
         title: PropTypes.string,
         description: PropTypes.string,
         url: PropTypes.string,
         urlToImage: PropTypes.string
      })
   ).isRequired
}

export default Articles

