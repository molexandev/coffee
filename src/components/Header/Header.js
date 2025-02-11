import React from 'react';
import styles from './Header.module.scss';
import Menu from '../Menu/Menu';

const Header = () => {
   return (
      <header className={styles.header}>
         <div className={styles.header__wrapper}>
            <Menu />
            <div className={styles.header__inner}>
               <h1 className={styles.header__title}>
                  Everything You Love About Coffee
               </h1>
               <p className={styles.header__text}>
                  We makes every day full of energy and taste
               </p>
               <p className={styles.header__text}>Want to try our beans?</p>
               <button className={styles.header__button}>More</button>
            </div>
         </div>
      </header>
   );
};

export default Header;
