import React from 'react';
import HeaderAdd from '../HeaderAdd/.HeaderAdd';
import Search from '../Search/Search';
import ProductItem from '../ProductItem/ProductItem';
import styles from './Category.module.scss';

const Category = () => {
   return (
      <>
         <HeaderAdd />
         <main className="main">
            <div className="container">
               <section className={styles.category_info}>
                  <div className={styles.category_info__wrapper}>
                     <div className={styles.category_info__img_box}>
                        <img
                           src={require('../../assets/images/category-info.png')}
                           alt="man with a cup of coffee"
                        />
                     </div>
                     <div className={styles.category_info__content}>
                        <h3 className={styles.category_info__title}>
                           About our beans
                        </h3>
                        <p className={styles.category_info__text}>
                           Extremity sweetness difficult behaviour he of. On
                           disposal of as landlord horrible. <br />
                           Afraid at highly months do things on at. Situation
                           recommend objection do intention so questions. <br />
                           As greatly removed calling pleased improve an. Last
                           ask him cold feel <br /> met spot shy want. Children
                           me laughing we prospect answered followed. At it went
                           is song that held help face.
                        </p>
                     </div>
                  </div>
               </section>
               <section className={styles.search}>
                  <Search />
               </section>
               <section className={styles.product_items}>
                  {/* <div className="container"> */}
                  <ProductItem />

                  {/* </div> */}
               </section>
            </div>
         </main>
      </>
   );
};

export default Category;
