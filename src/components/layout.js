import React from 'react';
import Header from './header';
import Footer from './footer';
import Home from '../pages/home';
import Checkout from './checkout';

function Layout() {
  return (
    <div>
      <Header />
      <Home />
      <Footer />
    </div>
  );
}

export default Layout;
