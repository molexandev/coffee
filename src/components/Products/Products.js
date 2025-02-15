import React from 'react';
import ProductItem from '../ProductItem/ProductItem';
import styles from './Products.module.scss';

const Products = () => {
   return (
      <div className={styles.products}>
         <div className={styles.products__wrapper}>
            <ProductItem />
         </div>
      </div>
   );
};

export default Products;
