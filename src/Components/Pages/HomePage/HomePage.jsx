import React from 'react';
import HeroSection from './HeroSection';
import ProjectSection from '../../Shared/ProjectSection';
import ServicesSection from '../../Shared/ServicesSection';
import OurAim from './OurAim';
import SustainSection from './SustainSection';
import WorksSection from './WorksSection';
import ClientSlider from '../../Shared/ClientSlider';

const HomePage = () => {
  return (
    <div>
      <HeroSection />
      <ProjectSection />
      <ServicesSection />
      <OurAim />
      <SustainSection />
      <WorksSection />
      <ClientSlider />
    </div>
  );
};

export default HomePage;
