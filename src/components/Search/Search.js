import React from 'react';
import styles from './Search.module.scss';

const Search = ({ onProductNameChange, onCountryChange }) => {
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
                  onChange={onProductNameChange}
               />
            </div>
            <div className={styles.search__buttons}>
               <p className={styles.search__title}>Or filter</p>
               <button
                  className={styles.search__btn}
                  onClick={() => onCountryChange('Brazil')}
                  value={'Brazil'}
               >
                  Brazil
               </button>
               <button
                  className={styles.search__btn}
                  onClick={() => onCountryChange('Kenya')}
                  value={'Kenya'}
               >
                  Kenya
               </button>
               <button
                  className={styles.search__btn}
                  onClick={() => onCountryChange('Columbia')}
                  value={'Columbia'}
               >
                  Columbia
               </button>
            </div>
         </div>
      </div>
   );
};

export default Search;
