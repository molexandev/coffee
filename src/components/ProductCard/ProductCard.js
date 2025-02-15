import React from 'react';
import HeaderAdd from '../HeaderAdd/.HeaderAdd';
// import styles from './ProductCard.module.scss';

const ProductCard = () => {
   return (
      <>
         <HeaderAdd
            title="Our coffee"
            banner={require('../../assets/images/header-add-banner.jpg')}
         />
         <div className="container">
            ProductCard{' '}
            <p>
               AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA
            </p>
            <p>
               FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF
            </p>
         </div>
      </>
   );
};

export default ProductCard;
