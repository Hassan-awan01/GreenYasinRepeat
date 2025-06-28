import React from 'react';
//import Header from './Header';
import ContactHero from '../ContactPage/ContactHero';
import ContactSection from './ContactSection';
const ContactPage = () => {
  return (
    <div className="md:pt-25">
      <ContactHero />
      <ContactSection />
    </div>
  );
};

export default ContactPage;
