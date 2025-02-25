import React, { Component } from 'react';
import styles from './Products.module.scss';
import ProductItem from '../ProductItem/ProductItem';

class Products extends Component {
   constructor(props) {
      super(props);
      this.state = {
         term: '',
      };
   }

   render() {
      const { data } = this.props;

      if (!data || !Array.isArray(data) || data.length === 0) {
         return <p>No products available</p>;
      }

      return (
         <div className={styles.products}>
            <div className={styles.products__wrapper}>
               {data.map((item, i) => (
                  <ProductItem
                     key={i}
                     img={item.img}
                     name={item.name}
                     origin={item.origin}
                     price={item.price}
                     currency={item.currency}
                  />
               ))}
            </div>
         </div>
      );
   }
}

export default Products;
