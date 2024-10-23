// src/components/Home.js
import React from 'react';
import HeroSection from './sections/HeroSection';
import FeaturedProducts from './sections/FeaturedProducts';
import Categories from './sections/Categories';
import Testimonials from './sections/Testimonials';
import Newsletter from './sections/Newsletter';
import Footer from './sections/Footer';

const Home = () => {
  return (
    <div>
      <HeroSection />
      <FeaturedProducts />
      <Categories />
      <Testimonials />
      <Newsletter />
      <Footer />
    </div>
  );
};

export default Home;
