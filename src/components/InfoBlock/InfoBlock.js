import React from 'react';
import styles from './InfoBlock.module.scss';

const InfoBlock = ({ img, alt, text, title }) => {
   return (
      <div className={styles.info_block__wrapper}>
         <div className={styles.info_block__img_box}>
            <img src={img} alt={alt} />
         </div>
         <div className={styles.info_block__content}>
            <h3 className={styles.info_block__title}>{title}</h3>
            <p className={styles.info_block__text}>{text}</p>
         </div>
      </div>
   );
};

export default InfoBlock;
