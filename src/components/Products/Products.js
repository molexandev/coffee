import React, { Component } from 'react';
import styles from './Products.module.scss';
import ProductItem from '../ProductItem/ProductItem';

class Products extends Component {
   render() {
      const products = [
         {
            img: require('../../assets/images/product-item-img.png'),
            name: 'AROMISTICO Coffee 1 kg',
            origin: 'Columbia',
            price: 6.99,
            currency: '$',
         },
         {
            img: require('../../assets/images/product-item-img.png'),
            name: 'DripLux Coffee 10 kg',
            origin: 'Columbia',
            price: 98.99,
            currency: '$',
         },
         {
            img: require('../../assets/images/product-item-img.png'),
            name: 'BeanZee Coffee 1 kg',
            origin: 'Brazil',
            price: 3.99,
            currency: '$',
         },
         {
            img: require('../../assets/images/product-item-img.png'),
            name: 'MochaX Coffee 1 kg',
            origin: 'Kenya',
            price: 5.55,
            currency: '$',
         },
         {
            img: require('../../assets/images/product-item-img.png'),
            name: 'BrewJoy Coffee 2 kg',
            origin: 'Brazil',
            price: 7.77,
            currency: '$',
         },
         {
            img: require('../../assets/images/product-item-img.png'),
            name: 'CafeVibe Coffee 3 kg',
            origin: 'Columbia',
            price: 9.99,
            currency: '$',
         },
      ];

      return (
         <div className={styles.products}>
            <div className={styles.products__wrapper}>
               {products.map((product, i) => (
                  <ProductItem
                     key={i}
                     img={product.img}
                     name={product.name}
                     origin={product.origin}
                     price={product.price}
                     currency={product.currency}
                  />
               ))}
               {/* <ProductItem /> */}
            </div>
         </div>
      );
   }
}

export default Products;
