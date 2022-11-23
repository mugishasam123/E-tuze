import React from 'react';
import Benefit from '../../components/benefits/index';
import Providers from '../../components/providers/index';
import Join from '../../components/join/index';
import Footer from '../../components/footer/index';
import Hero from '../../components/Hero';

const Home = () => {
  return (
    <main>
        <Hero/>
        <Benefit />
        <Providers />
        <Join />
        <Footer />
    </main>
  )
}

export default Home;