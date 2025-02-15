import React from 'react';
import Header from '../Header/Header';
import { Link } from 'react-router-dom';
import styles from './HomePage.module.scss';

// import coffeeImage from '../../assets/images/coffee-1.png';

const HomePage = () => {
   return (
      <>
         <Header />
         <main className="main">
            <div className="container">
               <section className={styles.about_us}>
                  <div className={styles.about_us__wrapper}>
                     <h3
                        className={styles.about_us__title}
                        style={{ marginBottom: '39px' }}
                     >
                        About us
                     </h3>
                     <div className={styles.about_us__content}>
                        <p className={styles.about_us__text}>
                           Extremity sweetness difficult behaviour he of. On
                           disposal of as landlord horrible. Afraid at highly
                           months do things on at. Situation recommend objection
                           do intention so questions. As greatly removed calling
                           pleased improve an. Last ask him cold feel met spot
                           shy want. Children me laughing we prospect answered
                           followed. At it went is song that held help face.
                        </p>
                        <p className={styles.about_us__text}>
                           Now residence dashwoods she excellent you. Shade
                           being under his bed her, Much read on as draw.
                           Blessing for ignorant exercise any yourself unpacked.
                           Pleasant horrible but confined day end marriage.
                           Eagerness furniture set preserved far recommend. Did
                           even but nor are most gave hope. Secure active living
                           depend son repair day ladies now.
                        </p>
                     </div>
                  </div>
               </section>
               <section className={styles.our_best}>
                  <div className={styles.our_best__wrapper}>
                     <h3 className={styles.our_best__title}>Our best</h3>
                     <div className={styles.our_best__inner}>
                        <div className={styles.our_best__product_card}>
                           <div className={styles.our_best__img_box}>
                              <Link
                                 className={styles.our_best__img_link}
                                 to="/product"
                              >
                                 <img
                                    className={styles.our_best__img}
                                    src={require('../../assets/images/coffee-1.png')}
                                    alt="coffee"
                                 />
                              </Link>
                              {/* <img src={coffeeImage} alt="coffee" /> */}
                           </div>
                           <div className={styles.our_best__link_box}>
                              <Link
                                 className={styles.our_best__link}
                                 to="/product"
                              >
                                 Solimo Coffee Beans 2 kg
                              </Link>
                           </div>
                           <p className={styles.our_best__price}>10.73$</p>
                        </div>
                        <div className={styles.our_best__product_card}>
                           <div className={styles.our_best__img_box}>
                              <Link
                                 className={styles.our_best__img_link}
                                 to="/product"
                              >
                                 <img
                                    className={styles.our_best__img}
                                    src={require('../../assets/images/coffee-2.png')}
                                    alt="coffee"
                                 />
                              </Link>
                              {/* <img src={coffeeImage} alt="coffee" /> */}
                           </div>
                           <div className={styles.our_best__link_box}>
                              <Link
                                 className={styles.our_best__link}
                                 to="/product"
                              >
                                 Presto Coffee Beans 1 kg
                              </Link>
                           </div>
                           <p className={styles.our_best__price}>15.99$</p>
                        </div>
                        <div className={styles.our_best__product_card}>
                           <div className={styles.our_best__img_box}>
                              <Link
                                 className={styles.our_best__img_link}
                                 to="/product"
                              >
                                 <img
                                    className={styles.our_best__img}
                                    src={require('../../assets/images/coffee-3.png')}
                                    alt="coffee"
                                 />
                              </Link>
                              {/* <img src={coffeeImage} alt="coffee" /> */}
                           </div>
                           <div className={styles.our_best__link_box}>
                              <Link
                                 className={styles.our_best__link}
                                 to="/product"
                              >
                                 AROMISTICO Coffee 1 kg
                              </Link>
                           </div>
                           <p className={styles.our_best__price}>6.99$</p>
                        </div>
                     </div>
                  </div>
               </section>
            </div>
         </main>
      </>
   );
};

export default HomePage;
