import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './views/Home.jsx';
import PizzaDetail from './views/PizzaDetail.jsx';
import Cart from './views/Cart.jsx';

import Nav from './components/Nav.jsx';
import Footer from './components/Footer.jsx';

function App() {
  return (
    <>
      <div className='home-app'>
        <Nav />
        <main>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='pizza/:pizzaId' element={<PizzaDetail />} />
            <Route path='/cart' element={<Cart />} />
          </Routes>
        </main>
      </div>
      <Footer />
    </>
  );
}

export default App;
