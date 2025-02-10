import React from 'react';
import styles from './Footer.module.scss';

const Footer = () => {
   return (
      <footer className={styles.footer}>
         <div className="container">
            <p>© 2025 Coffee Shop. All rights reserved.</p>
         </div>
      </footer>
   );
};

export default Footer;
