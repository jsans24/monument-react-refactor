import React from 'react';
import './landing.css';
import Header from '../components/Header';
import Archive from '../components/Archive';
import About from '../components/About';
import Gallery from '../components/Gallery';
import Contact from '../components/Contact';

const Landing = () => {
  return (
    <div>
      <Header />
      <Archive />
      <About />
      <Gallery />
      <Contact />
    </div>
  );
}

export default Landing