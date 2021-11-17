import React from 'react';
import Image from '../../UI/Image';
import style from './Social.module.scss';

function Social() {
   return (
      <div className={style.social}>
         <a
            href="https://t.me/Rip_boy"
            target="_blank"
            rel="noopener noreferrer"
         >
            <Image className={style.img} src='/images/social/telegram.png' alt='telegram' />
         </a>
         <a
            href="https://www.linkedin.com/in/%D0%B0%D0%BD%D0%B4%D1%80%D0%B5%D0%B9-%D0%B3%D1%80%D0%B5%D1%87%D0%BA%D0%B0%D0%BD%D1%8C-661322224/"
            target="_blank"
            rel="noopener noreferrer"
         >
            <Image className={style.img} src='/images/social/linkedin.png' alt='linkedIn' />
         </a>
      </div>
   )
}

export default Social
