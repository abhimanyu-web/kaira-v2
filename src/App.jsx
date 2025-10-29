import { useState } from 'react'
import './App.css'
import Hero from './components/Hero';
import Experience from './components/Experience';
import Coffee from './components/Coffee';
import Store from './components/Store';
import GetInTouch from './components/GetInTouch';
import Footer from './components/Footer';
import Logo from './components/Logo';
import Envelope from './components/Envelope';
import AmenitiesSection from "./components/AmenitiesSection";
import KairaGallery from './components/KairaGallery';
import WhoWeAreSlide from './components/WhoWeAreSlide';
import Welcome from './components/Welcome';
import WhyChooseKaira from './components/Whychoosekaira';
import WhyKaira from './components/WhyKaira';
import WhatsAppButton from './components/WhatsAppButton';
import LayoutandConfig from './components/LayoutandConfig';
import Awards from './components/awards';
import Testimonials from './components/testimonials';
function App() {

  return (
    <>
      <Hero/>
      <Logo />
      <Welcome />
      <GetInTouch />
      <WhyKaira />
      <Experience/>
      <LayoutandConfig/>
      <AmenitiesSection />
      <Coffee />
      <Store />
      <WhyChooseKaira />
      <KairaGallery />
      <WhoWeAreSlide />
      <Awards />
      <Testimonials />
      <Envelope />
      <Footer />
      <WhatsAppButton/>
      
    </>
  )
}

export default App
