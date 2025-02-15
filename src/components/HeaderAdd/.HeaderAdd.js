import React from 'react';
import Menu from '../Menu/Menu';
import styles from '../HeaderAdd/HeaderAdd.module.scss';

const HeaderAdd = ({ title, banner }) => {
   const titles = {};

   return (
      <header className={styles.header_add}>
         <div className={styles.header_add__wrapper}>
            <Menu />
            <img
               className={styles.header_add__banner}
               src={banner}
               alt="man with a cup of coffee"
            />
            <h2 className={styles.header_add__title}>{title}</h2>
         </div>
      </header>
   );
};

export default HeaderAdd;
