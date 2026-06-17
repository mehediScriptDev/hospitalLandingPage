import React from 'react';
import Navbar from './Components/Navbar';
import Hero from './Components/Hero';
import Ribbon from './Components/Ribbon';
import BuildingSection from './Components/BuildingSection';
import About from './Components/About';
import Specialties from './Components/Specialties';
import Insurance from './Components/Insurance';
import Testimonials from './Components/Testimonials';
import LeadForm from './Components/LeadForm';
import Footer from './Components/Footer';

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Ribbon />
      <BuildingSection />
      <About />
      <Specialties />
      <Insurance />
      <Testimonials />
      <LeadForm />
      <Footer />
    </>
  );
}

export default App;
