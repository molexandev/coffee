import React from 'react';
import styles from './Search.module.scss';

const Search = () => {
   return (
      <div className="container">
         <div className={styles.search__wrapper}>
            <div className={styles.search__input_wrapp}>
               <label className={styles.search__label} htmlFor="search">
                  Lookiing for
               </label>
               <input
                  className={styles.search__input}
                  type="text"
                  id="search"
                  placeholder="start typing here..."
               />
            </div>
            <div className={styles.search__buttons}>
               <p className={styles.search__title}>Or filter</p>
               <button className={styles.search__btn}>Brazil</button>
               <button className={styles.search__btn}>Kenya</button>
               <button className={styles.search__btn}>Columbia </button>
            </div>
         </div>
      </div>
   );
};

export default Search;
