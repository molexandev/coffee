import React, { Component } from 'react';
import styles from './Category.module.scss';
import HeaderAdd from '../HeaderAdd/.HeaderAdd';
import InfoBlock from '../InfoBlock/InfoBlock';
import Search from '../Search/Search';
import Products from '../Products/Products';

class Category extends Component {
   render() {
      const { data, onUpdateSearch, filterByCountry } = this.props;

      return (
         <>
            <HeaderAdd
               title="Our coffee"
               banner={require('../../assets/images/header-add-banner.jpg')}
            />
            <main className="main">
               <div className="container">
                  <section className={styles.category_info}>
                     <InfoBlock
                        img={require('../../assets/images/category-info.png')}
                        alt={'man with a cup of coffee'}
                        title={'About our beans'}
                        text={
                           <>
                              Extremity sweetness difficult behaviour he of. On
                              disposal of as landlord horrible. <br />
                              Afraid at highly months do things on at. Situation
                              recommend objection do intention so questions.{' '}
                              <br />
                              As greatly removed calling pleased improve an.
                              Last ask him cold feel <br />
                              met spot shy want. Children me laughing we
                              prospect answered followed. At it went is song
                              that held help face.
                           </>
                        }
                     />
                  </section>
                  <section className={styles.search}>
                     <Search
                        onUpdateSearch={onUpdateSearch}
                        filterByCountry={filterByCountry}
                     />
                  </section>
                  <section className={styles.product_items}>
                     <Products data={data} />
                  </section>
               </div>
            </main>
         </>
      );
   }
}

export default Category;
