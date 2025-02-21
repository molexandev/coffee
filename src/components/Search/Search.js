import React, { Component } from 'react';
import styles from './Search.module.scss';

class Search extends Component {
   constructor(props) {
      super(props);
      this.state = {
         term: '',
      };
   }

   onUpdateSearch = (e) => {
      const term = e.target.value;
      this.setState({ term });
      this.props.onUpdateSearch(term);
   };

   filterByCountry = (e) => {
      console.log(e.target.value);
   };

   render() {
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
                     value={this.state.term}
                     onChange={this.onUpdateSearch}
                  />
               </div>
               <div className={styles.search__buttons}>
                  <p className={styles.search__title}>Or filter</p>
                  <button
                     className={styles.search__btn}
                     value={'Brazil'}
                     onClick={this.filterByCountry}
                  >
                     Brazil
                  </button>
                  <button
                     className={styles.search__btn}
                     value={'Kenya'}
                     onClick={this.filterByCountry}
                  >
                     Kenya
                  </button>
                  <button
                     className={styles.search__btn}
                     value={'Columbia'}
                     onClick={this.filterByCountry}
                  >
                     Columbia
                  </button>
               </div>
            </div>
         </div>
      );
   }
}

export default Search;
