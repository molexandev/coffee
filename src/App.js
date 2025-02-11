import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
// import './App.scss';

// import Menu from './components/Menu/Menu';
import HomePage from './components/HomePage/HomePage';
import Footer from './components/Footer/Footer';
import ProductCard from './components/ProductCard/ProductCard';
// import Header from './components/Header/Header';
import ForYourPleasure from './components/ForYourPleasure/ForYourPleasure';
import Category from './components/Category/Category';

function App() {
   return (
      <Router>
         <div className="App">
            {/* <Header /> */}
            {/* <Menu /> */}
            <Routes>
               <Route path="/" element={<HomePage />} />
               <Route path="/category" element={<Category />} />
               <Route path="/info" element={<ForYourPleasure />} />
               <Route path="/product" element={<ProductCard />} />
            </Routes>
            <Footer />
         </div>
      </Router>
   );
}

export default App;
