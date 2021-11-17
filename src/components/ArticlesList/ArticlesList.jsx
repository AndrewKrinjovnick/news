import React from 'react';
import PropTypes from 'prop-types'
import style from './ArticlesList.module.scss';
import classNames from 'classnames';
import ArticleItem from '../ArticleItem/ArticleItem';



function ArticlesList({ articles, cName = {}, isTimeOpen = false }) {
   const { article_list } = cName;
   const articleListStyle = classNames({
      [style.wrapper]: !article_list,
      [article_list]: article_list
   })

   return (
      <div
         className={articleListStyle}
      >
         {
            articles.map((article, index) => {
               if (!article.title || !article.description || !article.url || !article.urlToImage) {
                  return null;
               }
               return (
                  <ArticleItem
                     key={index}
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

ArticlesList.propTypes = {
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

export default ArticlesList

