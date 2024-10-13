import React from 'react';
import ReactDOM from 'react-dom/client';
import Home from './pages/Home';

import './styles/global.css'
import Header from './components/Header';
import Footer from './components/Footer';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <Header />
    <Home />
    <Footer />
  </>
);
