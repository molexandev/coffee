import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styles from './ProductItem.module.scss';

class ProductItem extends Component {
   constructor(props) {
      super(props);
      this.state = {
         // img:
         //    this.props.img ||
         //    require('../../assets/images/product-item-img.png'),
         // name: this.props.name || 'Solimo Coffee Beans 2 kg',
         // origin: this.props.origin || 'Brazil',
         // price: this.props.price || 10.73,
         // currency: this.props.currency || '$',
      };
   }
   render() {
      const { img, name, origin, price, currency } = this.props;

      return (
         <div className={styles.product_item}>
            <div className={styles.product_item__wrapper}>
               <div className={styles.product_item__img_box}>
                  <Link className={styles.product_item__img_link} to="/product">
                     <img
                        className={styles.product_item__img}
                        src={img}
                        alt="coffee"
                     />
                  </Link>
               </div>
               <div className={styles.product_item__link_box}>
                  <Link className={styles.product_item__link} to="/product">
                     {name}
                  </Link>
               </div>
               <p className={styles.product_item__origin}>{origin}</p>
               <p className={styles.product_item__price}>
                  {price}
                  {currency}
               </p>
            </div>
         </div>
      );
   }
}

export default ProductItem;
