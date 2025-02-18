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
         country: '',
         productName: '',
      };
   }

   onProductNameChange = (event) => {
      this.setState({ productName: event.target.value });
   };

   onCountryChange = (e) => {
      this.setState({ country: e.target.value });
   };

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
