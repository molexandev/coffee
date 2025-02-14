import React from 'react';
import Menu from '../Menu/Menu';
import styles from '../HeaderAdd/HeaderAdd.module.scss';

const HeaderAdd = () => {
   return (
      <header className={styles.header_add}>
         <Menu />
         <div className={styles.header_add__wrapper}>
            <h2 className={styles.header_add__title}>Our Coffee</h2>
         </div>
      </header>
   );
};

export default HeaderAdd;
