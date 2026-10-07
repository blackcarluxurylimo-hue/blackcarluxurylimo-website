import React from 'react';
import { Link } from 'react-router-dom';
import { hearstImages } from '../utils/assets';
import Seo from '../components/Seo';
import FleetDetailsCarousel from '../components/FleetDetailsCarousel';

const MercedesPage = () => {
  const vehicles = [
    {
      headline: 'Business Van / SUV',
      model: 'Mercedes-Benz GLS',
      image: hearstImages.mercedesGls,
      summary: 'Large luxury SUV with a refined cabin and premium executive road comfort.',
      features: ['Fits up to 7 people', 'Fits carry-on and standard check-in luggage', 'Best for airport transfers and corporate rides'],
    },
    {
      headline: 'Executive SUV',
      model: 'Mercedes-Benz GLE',
      image: hearstImages.mercedesGle,
      summary: 'Elegant midsize luxury SUV balancing comfort, technology, and smooth travel.',
      features: ['Fits up to 7 people', 'Comfortable space for personal and business bags', 'Best for private city transportation'],
    },
    {
      headline: 'Icon Luxury SUV',
      model: 'Mercedes-Benz G-Class',
      image: hearstImages.mercedesGClass,
      summary: 'Signature high-end design paired with premium seating for exclusive travel.',
      features: ['Fits up to 5 people', 'Strong presence with premium interior finish', 'Best for VIP events and special occasions'],
    },
    {
      headline: 'Electric Business SUV',
      model: 'Mercedes-Benz EQS SUV',
      image: hearstImages.mercedesEqsSuv,
      summary: 'All-electric luxury SUV with whisper-quiet ride and next-generation comfort.',
      features: ['Fits up to 7 people', 'Quiet cabin ideal for business calls on the move', 'Best for modern eco-luxury transfers'],
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-ink to-ink/95">
      <Seo title="Mercedes-Benz Fleet - Premium Luxury Lineup | Black Car Luxury Limo" description="Discover our Mercedes-Benz lineup featuring GLS, GLE, G-Class, and EQS SUV models for premium executive travel." />
      <div className="pt-[9rem] pb-16 px-4 max-w-7xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-2 text-center">Mercedes-Benz</h1>
        <p className="text-gold text-center text-sm md:text-base mb-12">Complete Luxury SUV Lineup</p>
        <div className="mb-8 flex justify-center">
          <Link
            to="/fleet"
            className="inline-flex min-h-12 items-center rounded-full border border-gold/45 bg-ink/80 px-5 text-sm font-semibold text-white transition hover:bg-gold hover:text-charcoal"
          >
            Back to Fleet
          </Link>
        </div>
        
        <FleetDetailsCarousel items={vehicles} />

        <div className="mt-12 text-center">
          <p className="text-white/80 text-sm max-w-2xl mx-auto">
            Experience the full Mercedes-Benz luxury experience with our premium SUV lineup, from executive comfort to iconic design and electric innovation.
          </p>
        </div>
      </div>
    </div>
  );
};

export default MercedesPage;
