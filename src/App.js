import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

// Імпортуємо компоненти
import Menu from './components/Menu/Menu';
import Main from './components/Main/Main';
import Footer from './components/Footer/Footer';
import ProductCard from './components/ProductCard/ProductCard';
import Header from './components/Header/Header';
import ForYourPleasure from './components/ForYourPleasure/ForYourPleasure';

function App() {
   return (
      <Router>
         <div className="App">
            <Header />
            {/* <Menu /> */}
            <Routes>
               <Route path="/" element={<Main />} />
               <Route path="/product" element={<ProductCard />} />
               <Route path="/info" element={<ForYourPleasure />} />
               {/* Додаємо більше маршрутів при необхідності */}
            </Routes>
            <Footer />
         </div>
      </Router>
   );
}

export default App;
