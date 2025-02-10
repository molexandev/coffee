import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Menu.module.scss';

const Menu = () => {
   return (
      <nav className={styles.nav}>
         <ul className={styles.nav__list}>
            <li className={styles.nav__item}>
               <Link to="/">Coffee house</Link>
            </li>
            <li className={styles.nav__item}>
               <Link to="/product">Our coffee</Link>
            </li>
            <li className={styles.nav__item}>
               <Link to="/info">For your pleasure</Link>
            </li>
         </ul>
      </nav>
   );
};

export default Menu;
