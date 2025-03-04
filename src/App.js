import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './styles/global.scss';
import './styles/variables.scss';

import HomePage from './components/HomePage/HomePage';
import Footer from './components/Footer/Footer';
import ProductCard from './components/ProductCard/ProductCard';
import ForYourPleasure from './components/ForYourPleasure/ForYourPleasure';
import Category from './components/Category/Category';

class App extends Component {
   constructor(props) {
      super(props);
      this.state = {
         products: [
            {
               img: require('./assets/images/product-item-img.png'),
               name: 'AROMISTICO Coffee 1 kg',
               origin: 'Columbia',
               price: 6.99,
               currency: '$',
            },
            {
               img: require('./assets/images/product-item-img.png'),
               name: 'DripLux Coffee 10 kg',
               origin: 'Columbia',
               price: 98.99,
               currency: '$',
            },
            {
               img: require('./assets/images/product-item-img.png'),
               name: 'BeanZee Coffee 1 kg',
               origin: 'Brazil',
               price: 3.99,
               currency: '$',
            },
            {
               img: require('./assets/images/product-item-img.png'),
               name: 'MochaX Coffee 1 kg',
               origin: 'Kenya',
               price: 5.55,
               currency: '$',
            },
            {
               img: require('./assets/images/product-item-img.png'),
               name: 'BrewJoy Coffee 2 kg',
               origin: 'Brazil',
               price: 7.77,
               currency: '$',
            },
            {
               img: require('./assets/images/product-item-img.png'),
               name: 'CafeVibe Coffee 3 kg',
               origin: 'Columbia',
               price: 9.99,
               currency: '$',
            },
            {
               img: require('./assets/images/product-item-img.png'),
               name: 'CafeVibe Coffee 5 kg',
               origin: 'Brazil',
               price: 19.99,
               currency: '$',
            },
            {
               img: require('./assets/images/product-item-img.png'),
               name: 'CafeVibe Coffee 7 kg',
               origin: 'Kenya',
               price: 29.99,
               currency: '$',
            },
         ],
         term: '',
         country: '',
      };
   }

   searchName = (items, term) => {
      if (term.length === 0) {
         return items;
      }

      return items.filter((item) => {
         return item.name.indexOf(term) > -1;
      });
   };

   onUpdateSearch = (term) => {
      this.setState({ term });
   };

   filterByCountry = (items, country) => {
      switch (country) {
         case 'Show all':
            return items;
         case 'Brazil':
            return items.filter((item) => item.origin === 'Brazil');
         case 'Kenya':
            return items.filter((item) => item.origin === 'Kenya');
         case 'Columbia':
            return items.filter((item) => item.origin === 'Columbia');
         default:
            return items;
      }
   };

   onUpdateCountry = (country) => {
      this.setState({ country });
   };

   render() {
      const { products, term, country } = this.state;
      const visibleData = this.filterByCountry(
         this.searchName(products, term),
         country
      );
      // const visibleProducts = this.filterByCountry(products, country);

      return (
         <Router>
            <div className="App">
               <div className="wrapper">
                  <Routes>
                     <Route
                        path="/category"
                        element={
                           <Category
                              data={visibleData}
                              onUpdateSearch={this.onUpdateSearch}
                              filterByCountry={this.onUpdateCountry}
                           />
                        }
                     />
                     <Route path="/" element={<HomePage />} />
                     <Route
                        path="/info"
                        element={<ForYourPleasure products={products} />}
                     />
                     <Route path="/product" element={<ProductCard />} />
                  </Routes>
                  <Footer />
               </div>
            </div>
         </Router>
      );
   }
}

export default App;
