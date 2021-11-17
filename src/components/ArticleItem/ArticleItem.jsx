import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import Image from '../../UI/Image';
import style from './ArticleItem.module.scss'
import { timeHasPassed } from '../../utils/date'


function ArticleItem({ cName = null, article, isTimeOpen = false }) {
   const { articles_item, link, img, description, header, article_wrapper } = cName;
   let renderTimeOpen;

   const articleItemStyle = classNames({
      [style.article]: !articles_item,
      [articles_item]: articles_item
   })

   const articleWrapperStyle = classNames({
      [style.article_wrapper]: !article_wrapper,
      [article_wrapper]: article_wrapper
   })

   const linkStyle = classNames({
      [style.link]: !link,
      [link]: link
   })

   const headerStyle = classNames({
      [style.header]: !header,
      [header]: header
   })

   const imgStyle = classNames({
      [style.image]: !img,
      [img]: img
   })

   const descriptionStyle = classNames({
      [style.description]: !description,
      [description]: description
   })

   if (isTimeOpen) {
      renderTimeOpen = (
         <div className={style.time}>
            <Image className={style.time_img} src="/images/time.png" alt="time" />
            <p className={style.time_passed}>{timeHasPassed(Date.now() - new Date(article.publishedAt).getTime())}</p>
         </div>
      )
   }

   return (
      <div className={articleItemStyle} >
         <div className={articleWrapperStyle}>
            <a
               className={linkStyle}
               href={article.url}
               target="_blank"
               rel="noopener noreferrer"
            >
               <h2 className={headerStyle}>{article.title}</h2>

               <Image className={imgStyle} src={article.urlToImage} alt="article" />

               <div className={descriptionStyle}>{article.description}</div>
               {renderTimeOpen}
            </a>
         </div>
      </div>
   )
}

ArticleItem.propTypes = {
   cName: PropTypes.objectOf(PropTypes.string),
   isTimeOpen: PropTypes.bool,
   article: PropTypes.shape({
      title: PropTypes.string,
      description: PropTypes.string,
      url: PropTypes.string,
      urlToImage: PropTypes.string
   })
}

export default ArticleItem
