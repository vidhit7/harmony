// src/pages/About.js
import React from 'react';
import HeroSection from '../components/About/HeroSection';
import TeamSection from '../components/About/TeamSection';
import VisionValuesSection from '../components/About/VisionValuesSection';
import RealTimePoll from '../components/RealTimePoll';
import { ParallaxProvider } from 'react-scroll-parallax';

const About = () => {
  return (
    <ParallaxProvider>
      <div className="about-page">
        <HeroSection />
        <TeamSection />
        <VisionValuesSection />
      </div>
    </ParallaxProvider>
  );
};

export default About;
