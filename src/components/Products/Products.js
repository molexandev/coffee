import React, { Component } from 'react';
import styles from './Products.module.scss';
import ProductItem from '../ProductItem/ProductItem';
// import { data } from 'react-router-dom';

class Products extends Component {
   constructor(props) {
      super(props);
      this.state = {
         products: [
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
         ],
         term: '',
      };
   }

   searchName = (items, term) => {
      if (term.length === 0) {
         return items;
      }

      return items.filter((item) => {
         return item.name.indexOf(term) > -1;
      });
   };

   onUpdateSearch = (term) => {
      this.setState({ term });
   };

   render() {
      const { products, term } = this.state;
      const visibleData = this.searchName(products, term);
      // console.log(visibleData);

      return (
         <div className={styles.products}>
            <div className={styles.products__wrapper}>
               {visibleData.map((item, i) => (
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
