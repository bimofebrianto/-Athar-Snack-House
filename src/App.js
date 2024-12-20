import React from 'react';
import Navbar from './components/Navbar';
import LandingPage from './components/LandingPage';
import Menu from './components/Menu';
import Checkout from './components/Checkout';
import Footer from './components/Footer';

const App = () => {
  return (
    <div>
      <Navbar />
      <LandingPage />
      <Menu />
      <Checkout />
      <Footer />
    </div>
  );
};

export default App;
