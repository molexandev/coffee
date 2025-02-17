import React from 'react';
import HeaderAdd from '../HeaderAdd/.HeaderAdd';
import styles from './ProductCard.module.scss';

const ProductCard = () => {
   return (
      <>
         <HeaderAdd
            title="Our coffee"
            banner={require('../../assets/images/header-add-banner.jpg')}
         />
         <main className="main">
            <div className="container">
               <section className={styles.product_card}>
                  <div className={styles.product_card__wrapper}>
                     <div className={styles.product_card__img_box}>
                        <img
                           src={require('../../assets/images/product-image.jpg')}
                           alt="product"
                           width={392}
                           height={355}
                        />
                     </div>
                     <div className={styles.product_card__info}>
                        <h3 className={styles.product_card__title}>About it</h3>
                        <dl className={styles.product_card__origin}>
                           <dt>Country:</dt>
                           <dd>Brasil</dd>
                        </dl>
                        <div className={styles.product_card__description}>
                           <p>
                              <span>Description:</span>
                              Lorem ipsum dolor sit amet, consectetur adipiscing
                              elit, sed do eiusmod tempor incididunt ut labore
                              et dolore magna aliqua. Ut enim ad minim veniam,
                              quis nostrud exercitation ullamco laboris nisi ut
                              aliquip ex ea commodo consequat.
                           </p>
                        </div>
                        <dl className={styles.product_card__price}>
                           <dt>Price: </dt>
                           <dd>16.99$</dd>
                        </dl>
                     </div>
                  </div>
               </section>
            </div>
         </main>
      </>
   );
};

export default ProductCard;
