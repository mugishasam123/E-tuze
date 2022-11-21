import React from 'react';
import Benefit from '../../components/benefits/index';
import Providers from '../../components/providers/index';
import Join from '../../components/join/index';
import Footer from '../../components/footer/index';

const Home = () => {
  return (
    <main>
        <Benefit />
        <Providers />
        <Join />
        <Footer />
    </main>
  )
}

export default Home;