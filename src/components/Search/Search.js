import React, { Component } from 'react';
import styles from './Search.module.scss';

class Search extends Component {
   constructor(props) {
      super(props);
      this.state = {
         buttonsData: [
            { name: 'Show all' },
            { name: 'Brazil' },
            { name: 'Kenya' },
            { name: 'Columbia' },
         ],
         term: '',
         country: '',
      };
   }

   onUpdateSearch = (e) => {
      const term = e.target.value;
      this.setState({ term });
      this.props.onUpdateSearch(term);
   };

   filterByCountry = (e) => {
      const country = e.target.value;
      console.log(country);
      this.setState({ country });
      this.props.filterByCountry(country);
   };

   render() {
      const buttons = this.state.buttonsData;

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
                  {buttons.map((item) => (
                     <button
                        key={item.name}
                        className={styles.search__btn}
                        value={item.name}
                        onClick={this.filterByCountry}
                     >
                        {item.name}
                     </button>
                  ))}
               </div>
            </div>
         </div>
      );
   }
}

export default Search;
