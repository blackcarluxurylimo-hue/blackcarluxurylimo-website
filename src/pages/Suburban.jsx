import React from 'react';
import { Link } from 'react-router-dom';
import { hearstImages } from '../utils/assets';
import Seo from '../components/Seo';
import FleetDetailsCarousel from '../components/FleetDetailsCarousel';

const SuburbanPage = () => {
  const vehicles = [
    {
      headline: 'Business Van / SUV',
      model: 'Chevrolet Suburban',
      image: hearstImages.chevroletSuburban,
      summary: 'Full-size premium SUV with serious cargo room and a smooth travel experience.',
      features: ['Fits up to 7 people', 'Handles multiple carry-on and check-in bags', 'Best for group airport transportation'],
    },
    {
      headline: 'Extended Group SUV',
      model: 'Chevrolet Suburban',
      image: hearstImages.chevroletSuburbanAlt,
      summary: 'Long body layout gives added comfort when traveling with family or teams.',
      features: ['Fits up to 7 people', 'Generous rear area for heavier luggage needs', 'Best for long-distance private trips'],
    },
    {
      headline: 'Premium Interior Comfort',
      model: 'Chevrolet Suburban Cabin',
      image: hearstImages.chevroletSuburbanInterior,
      summary: 'Spacious seating and premium interior setup for relaxed executive transfers.',
      features: ['Wide seating layout for maximum comfort', 'Climate-controlled luxury cabin experience', 'Best for business travelers and families'],
    },
    {
      headline: 'Event Transportation SUV',
      model: 'Chevrolet Suburban Executive',
      image: hearstImages.chevroletSuburban,
      summary: 'Reliable luxury transportation for evening events, meetings, and private service.',
      features: ['Fits up to 7 people', 'Consistent comfort for city and highway routes', 'Best for scheduled multi-stop itineraries'],
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-ink to-ink/95">
      <Seo title="Chevrolet Suburban - Full-Size Luxury SUV | Black Car Luxury Limo" description="Experience spacious luxury with our Chevrolet Suburban fleet. Perfect for large groups and extended journeys." />
      <div className="pt-[9rem] pb-16 px-4 max-w-7xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-2 text-center">Chevrolet Suburban</h1>
        <p className="text-gold text-center text-sm md:text-base mb-12">Full-Size Luxury SUV</p>
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
            The Chevrolet Suburban offers unmatched space and comfort for larger groups. Luxury amenities in a full-size package.
          </p>
        </div>
      </div>
    </div>
  );
};

export default SuburbanPage;
