import React from 'react';
import { Link } from 'react-router-dom';
import { ReactSVG } from 'react-svg';
import styles from './Menu.module.scss';
import logo from '../../assets/images/logo.svg';

const Menu = () => {
   return (
      <>
         <nav className={styles.nav}>
            <ul className={styles.nav__list}>
               <li className={styles.nav__item}>
                  <Link to="/" className={styles.nav__link}>
                     <ReactSVG src={logo} className={styles.nav__logo} />
                     Coffee house
                  </Link>
               </li>
               <li className={styles.nav__item}>
                  <Link to="/category" className={styles.nav__link}>
                     Our coffee
                  </Link>
               </li>
               <li className={styles.nav__item}>
                  <Link to="/info" className={styles.nav__link}>
                     For your pleasure
                  </Link>
               </li>
            </ul>
         </nav>
      </>
   );
};

export default Menu;
