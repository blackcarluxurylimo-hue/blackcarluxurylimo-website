import React from 'react';
import { Link } from 'react-router-dom';
import { hearstImages } from '../utils/assets';
import Seo from '../components/Seo';
import FleetDetailsCarousel from '../components/FleetDetailsCarousel';
import { escaladeSeo } from '../data/pageSeo.js';

const EscaladePage = () => {
  const vehicles = [
    {
      headline: 'Executive SUV',
      model: 'Cadillac Escalade',
      image: hearstImages.cadillacEscalade,
      summary: 'Flagship cabin comfort with strong road presence for airport and executive trips.',
      features: ['Fits up to 7 people', 'Carries 6 carry-on bags plus personal items', 'Best for premium airport transfers and city rides'],
    },
    {
      headline: 'Extended SUV',
      model: 'Cadillac Escalade ESV',
      image: hearstImages.cadillacEscaladeEsv,
      summary: 'Long-wheelbase Escalade built for larger groups and heavier luggage demand.',
      features: ['Fits up to 8 people', 'Extra rear space for larger check-in luggage', 'Best for family travel and multi-stop itineraries'],
    },
    {
      headline: 'Performance Luxury',
      model: 'Cadillac Escalade-V',
      image: hearstImages.cadillacEscaladeV,
      summary: 'High-performance trim with premium interior details and commanding comfort.',
      features: ['Fits up to 7 people', 'Smooth power for highway and city travel', 'Best for VIP arrivals and private events'],
    },
    {
      headline: 'Electric Premium',
      model: 'Cadillac Escalade IQ/IQL',
      image: hearstImages.cadillacEscaladeIql,
      summary: 'All-electric Escalade experience with quiet ride quality and modern technology.',
      features: ['Fits up to 7 people', 'Quiet cabin with premium seating comfort', 'Best for eco-conscious executive transportation'],
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-ink to-ink/95">
      <Seo {...escaladeSeo} />
      <div className="pt-[9rem] pb-16 px-4 max-w-7xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-2 text-center">Cadillac Escalade</h1>
        <p className="text-gold text-center text-sm md:text-base mb-12">Escalade Lineup</p>
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
            From classic Escalade comfort to Escalade-V performance and the all-electric IQ/IQL, our full Cadillac lineup delivers flagship luxury for airport transfers, executive travel, and special occasions.
          </p>
        </div>
      </div>
    </div>
  );
};

export default EscaladePage;
