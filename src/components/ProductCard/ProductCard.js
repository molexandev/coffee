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
         <main className="main">
            <div className="container"></div>
         </main>
      </>
   );
};

export default ProductCard;
