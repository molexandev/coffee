import React from 'react';
import styles from './Footer.module.scss';
import Menu from '../Menu/Menu';

const Footer = () => {
   return (
      <footer className={styles.footer}>
         <div className="container">
            <div className={styles.footer__wrapper}>
               <div className={styles.footer__inner}>
                  <Menu />
               </div>
               {/* <p>© 2025 Coffee Shop. All rights reserved.</p> */}
            </div>
         </div>
      </footer>
   );
};

export default Footer;
