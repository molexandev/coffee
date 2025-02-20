import React, { Component } from 'react';
import styles from './Products.module.scss';
import ProductItem from '../ProductItem/ProductItem';

class Products extends Component {
   render() {
      const { productName = '', country = '' } = this.props; // Отримуємо пропси для фільтрації

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
         {
            img: require('../../assets/images/product-item-img.png'),
            name: 'CafeVibe Coffee 5 kg',
            origin: 'Brazil',
            price: 19.99,
            currency: '$',
         },
         {
            img: require('../../assets/images/product-item-img.png'),
            name: 'CafeVibe Coffee 7 kg',
            origin: 'Kenya',
            price: 29.99,
            currency: '$',
         },
      ];

      const filteredProducts = products.filter((product) => {
         return (
            product.name.toLowerCase().includes(productName.toLowerCase()) ||
            country === '' ||
            product.origin.toLowerCase() === country.toLowerCase()
         );
      });

      return (
         <div className={styles.products}>
            <div className={styles.products__wrapper}>
               {filteredProducts.map((product, i) => (
                  <ProductItem
                     key={i}
                     img={product.img}
                     name={product.name}
                     origin={product.origin}
                     price={product.price}
                     currency={product.currency}
                  />
               ))}
            </div>
         </div>
      );
   }
}

export default Products;
