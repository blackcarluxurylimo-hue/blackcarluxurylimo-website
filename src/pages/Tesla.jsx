import React from 'react';
import { Link } from 'react-router-dom';
import { hearstImages } from '../utils/assets';
import Seo from '../components/Seo';
import FleetDetailsCarousel from '../components/FleetDetailsCarousel';
import { teslaSeo } from '../data/pageSeo.js';

const TeslaPage = () => {
  const vehicles = [
    {
      headline: 'Electric Business SUV',
      model: 'Tesla Model X',
      image: hearstImages.teslaModelX,
      summary: 'Premium all-electric SUV offering quiet cabin comfort and spacious seating.',
      features: ['Fits up to 7 people', 'Suitable for airport and city transfers', 'Best for eco-conscious executive travel'],
    },
    {
      headline: 'Performance Executive Sedan',
      model: 'Tesla Model S Plaid',
      image: hearstImages.teslaModelS,
      summary: 'High-performance electric sedan with first-class comfort and modern design.',
      features: ['Fits up to 5 people', 'Smooth and quiet long-range business rides', 'Best for private VIP point-to-point trips'],
    },
    {
      headline: 'Smart City Sedan',
      model: 'Tesla Model 3',
      image: hearstImages.teslaModel3,
      summary: 'Refined electric sedan ideal for efficient luxury transportation in NYC.',
      features: ['Fits up to 5 people', 'Comfortable option for lighter luggage needs', 'Best for urban meetings and transfers'],
    },
    {
      headline: 'Premium Electric Crossover',
      model: 'Tesla Model Y',
      image: hearstImages.teslaModelY,
      summary: 'Versatile electric crossover balancing passenger space and premium convenience.',
      features: ['Fits up to 7 people', 'Flexible layout for travelers and bags', 'Best for families and corporate travel'],
    },
    {
      headline: 'Signature Electric Utility',
      model: 'Tesla Cybertruck',
      image: hearstImages.teslaCybertruck,
      summary: 'Distinctive premium electric utility vehicle for standout private transportation.',
      features: ['Fits up to 5 people', 'Bold design with premium comfort focus', 'Best for special events and unique experiences'],
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-ink to-ink/95">
      <Seo {...teslaSeo} />
      <div className="pt-[9rem] pb-16 px-4 max-w-7xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-2 text-center">Tesla Fleet</h1>
        <p className="text-gold text-center text-sm md:text-base mb-12">Complete Luxury Electric Lineup</p>
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
            Experience every Tesla model in one premium fleet. From executive sedans to full-size SUVs and the Cybertruck, enjoy cutting-edge electric transportation with luxury service.
          </p>
        </div>
      </div>
    </div>
  );
};

export default TeslaPage;
