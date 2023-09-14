

import { NavLink } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import Hero from '../../components/LandingPage/Hero';
import Explication from '../../components/LandingPage/Explication';
import Marquee from "react-fast-marquee";
import Pricing from '../../components/LandingPage/Pricing';
import Team from '../../components/LandingPage/Team';
import Testimonial from '../../components/LandingPage/Testimonial';

const containerStyle = {
  background: 'radial-gradient(circle, rgba(8,24,41,1) 0%, rgba(2h-24,96,1) 100%)',
  minHeight: '100vh',
  display: 'flex',
  flexDirection: 'column',
};

const nav = {
  background: 'radial-gradient(circle, rgba(8,24,41,1) 0%, rgba(2h-24,96,1) 100%)',
};

const LandingPage = () => {
  const [showScrollToTop, setShowScrollToTop] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowScrollToTop(true);
      } else {
        setShowScrollToTop(false);
      }
    }

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div style={containerStyle}>
      <nav style={nav} className="fixed z-10 top-0 bot h-20 flex w-full items-center justify-between py-2 shadow-sm shadow-neutral-700/10 dark:bg-transparent" data-te-navbar-ref>
        <div className="flex w-full flex-wrap items-center justify-between px-6">
          <div className="flex items-center">
            <div className="my-1 flex items-center lg:my-0 lg:ml-auto">
              <NavLink
                to="/login"
                className="right-0 bottom-0 w-50 px-5 py-3 rounded-bg-blue-800 text-white font-semibold rounded hover:bg-blue-600"
              >
                Se connecter
              </NavLink>
              <NavLink
                to="/register"
                className="right-0 bottom-0 w-50 px-5 py-3 rounded-bg-blue-800 text-white font-semibold rounded hover:bg-blue-600"
              >
                S'enregistrer
              </NavLink>
            </div>
          </div>
        </div>
      </nav>
      <section className='mt-20'>
        <Hero />
      </section>
      <section className='mt-40'>
      <Marquee>
        
        <img src='public/logo/netflix.png' alt="logo" className="h-14 md:h-24 mr-10" />
        <img src='public/logo/coca-cola.png' alt="logo" className="h-14 md:h-24 mr-10 ml-10" />
        <img src='public/logo/apple.png' alt="logo" className="h-14 md:h-24 mr-10" />
        <img src='public/logo/google-logo-9826.png' alt="logo" className="h-14 md:h-24 mr-10" />
        <img src='public/logo/microsoft-logo-png-2396.png' alt="logo" className="h-14 md:h-24 mr-10" />
        <img src='public/logo/spotify-logo-png-7057.png' alt="logo" className="h-14 md:h-24 mr-10" />
        <img src='public/logo/tesla-logo-png-2231.png' alt="logo" className="h-6 md:h-6 mr-10 mt-4" />
        <img src='public/logo2/nvidia.png' alt="nvidia" className="h-14 md:h-24 mr-10" />
        <img src='public/logo2/amazon-logo-2.png' alt="amazon" className="h-14 md:h-24 mr-10 ml-10" />
        <img src='public/logo/apple.png' alt="logo" className="h-14 md:h-24 mr-10" />
        <img src='public/logo2/intel-shop-logo-png-13.png' alt="logo" className="h-14 md:h-24 mr-10" />
        <img src='public/logo2/airbnb-logo-10.png' alt="logo-airbnb" className="h-14 md:h-24 mr-10" />
        <img src='public/logo/starbucks-logo-png-1667.png' alt="logo" className="h-14 md:h-24 mr-10" />
        

    </Marquee>
      </section>
      <section>
        <Testimonial />
      </section>
      <section>
        <Pricing />
      </section>
      <section>
        <Explication />
      </section>
      <section>
        <Team />
      </section>
      <button
        id="scrollToTopBtn"
        className={`fixed bottom-6 right-6 bg-indigo-500 opacity-50 hover:bg-indigo-600 text-white py-2 px-4 rounded-full shadow-h-14 md transition duration-300 ease-in-out ${showScrollToTop ? '' : 'hidden'}`}
        onClick={scrollToTop}
      >
        &#x21e7;
      </button>
    </div>
  );
};

export default LandingPage;
