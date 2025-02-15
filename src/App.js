import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
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
         data: [
            {
               img: 'assets/images/product-item-img.png',
               name: 'AROMISTICO Coffee 1 kg',
               origin: 'Columbia',
               price: 6.99,
            },
            {
               img: 'assets/images/product-item-img.png',
               name: 'DripLux Coffee 1 kg',
               origin: 'Columbia',
               price: 98.99,
               currency: '$',
            },
            {
               img: 'assets/images/product-item-img.png',
               name: 'BeanZee Coffee 1 kg',
               origin: 'Brazil',
               price: 3.99,
               currency: '$',
            },
            {
               img: 'assets/images/product-item-img.png',
               name: 'MochaX Coffee 1 kg',
               origin: 'Kenya',
               price: 5.55,
               currency: '$',
            },
            {
               img: 'assets/images/product-item-img.png',
               name: 'BrewJoy Coffee 1 kg',
               origin: 'Brazil',
               price: 7.77,
               currency: '$',
            },
            {
               img: 'assets/images/product-item-img.png',
               name: 'CafeVibe Coffee 1 kg',
               origin: 'Columbia',
               price: 9.99,
               currency: '$',
            },
         ],
      };
   }

   render() {
      return (
         <Router>
            <div className="App">
               <div className="wrapper">
                  <Routes>
                     <Route path="/" element={<HomePage />} />
                     <Route path="/category" element={<Category />} />
                     <Route path="/info" element={<ForYourPleasure />} />
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
