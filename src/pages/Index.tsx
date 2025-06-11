
import React from 'react';
import Navigation from '../components/Navigation';
import HeroSection from '../components/HeroSection';
import IntroStatement from '../components/IntroStatement';
import Gallery from '../components/Gallery';
import NewestDesigns from '../components/NewestDesigns';
import VideoSection from '../components/VideoSection';
import DesignerStatement from '../components/DesignerStatement';
import Testimonials from '../components/Testimonials';
import FAQ from '../components/FAQ';
import CTABanner from '../components/CTABanner';
import InstagramGrid from '../components/InstagramGrid';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <HeroSection />
      <IntroStatement />
      <Gallery />
      <NewestDesigns />
      <VideoSection />
      <DesignerStatement />
      <Testimonials />
      <FAQ />
      <CTABanner />
      <InstagramGrid />
      <Footer />
    </div>
  );
};

export default Index;
