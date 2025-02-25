import React from 'react';
import styles from './ForYourPleasure.module.scss';
import HeaderAdd from '../HeaderAdd/.HeaderAdd';
import InfoBlock from '../InfoBlock/InfoBlock';
import Products from '../Products/Products';

const ForYourPleasure = ({ products }) => {
   return (
      <>
         <HeaderAdd
            title="for your pleasure"
            banner={require('../../assets/images/header-add-banner-info.jpg')}
         />
         <main className="main">
            <section className={styles.infoblock}>
               <div className="container">
                  <InfoBlock
                     img={require('../../assets/images/cup-of-coffe.png')}
                     alt={'cup of coffee'}
                     title={'About our goods'}
                     text={
                        <>
                           Extremity sweetness difficult behaviour he of. On
                           disposal of as landlord horrible. <br />
                           Afraid at highly months do things on at. Situation
                           recommend objection do intention so questions.
                           <br />
                           As greatly removed calling pleased improve an. Last
                           ask him cold feel met spot shy want. Children me
                           laughing we prospect answered followed. At it went is
                           song that held help face.
                        </>
                     }
                  />
               </div>
            </section>
            <section className={styles.products}>
               <div className="container">
                  <Products data={products} />
               </div>
            </section>
         </main>
      </>
   );
};

export default ForYourPleasure;
