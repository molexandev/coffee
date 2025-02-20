import React, { Component } from 'react';
import styles from './Products.module.scss';
import ProductItem from '../ProductItem/ProductItem';
// import { data } from 'react-router-dom';

class Products extends Component {
   constructor(props) {
      super(props);
      this.state = {
         term: '',
      };
   }

   render() {
      const { data } = this.props;
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

// key={i}
// img={product.img}
// name={product.name}
// origin={product.origin}
// price={product.price}
// currency={product.currency}

export default Products;
