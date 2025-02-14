import React from 'react';
import { Link } from 'react-router-dom';
import styles from './ProductItem.module.scss';

const ProductItem = () => {
   return (
      <div className={styles.product_item}>
         <div className={styles.product_item__wrapper}>
            <div className={styles.product_item__img_box}>
               <Link className={styles.product_item__img_link} to="/product">
                  <img
                     className={styles.product_item__img}
                     src={require('../../assets/images/product-item-img.png')}
                     alt="coffee"
                  />
               </Link>
               {/* <img src={coffeeImage} alt="coffee" /> */}
            </div>
            <div className={styles.product_item__link_box}>
               <Link className={styles.product_item__link} to="/product">
                  Solimo Coffee Beans 2 kg
               </Link>
            </div>
            <p className={styles.product_item__origin}>Brazil</p>
            <p className={styles.product_item__price}>10.73$</p>
         </div>
      </div>
   );
};

export default ProductItem;
