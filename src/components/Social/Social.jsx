import React from 'react';
import { baseUrlForImg } from '../../router';
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
            <Image className={style.img} src={`${baseUrlForImg}social/telegram.png`} alt='telegram' />
         </a>
         <a
            href="https://www.linkedin.com/in/andrii-hrechkan-661322224/"
            target="_blank"
            rel="noopener noreferrer"
         >
            <Image className={style.img} src={`${baseUrlForImg}social/linkedin.png`} alt='linkedIn' />
         </a>
      </div>
   )
}

export default Social
