import React from 'react';
import { Link } from 'react-router-dom';
import { hearstImages } from '../utils/assets';
import Seo from '../components/Seo';
import FleetDetailsCarousel from '../components/FleetDetailsCarousel';

const LincolnPage = () => {
  const vehicles = [
    {
      headline: 'Business SUV',
      model: 'Lincoln Navigator',
      image: hearstImages.lincolnNavigator,
      summary: 'Executive-level comfort with a spacious interior and smooth premium ride.',
      features: ['Fits up to 8 people', 'Comfortable room for carry-on and check-in luggage', 'Best for airport pickups and corporate travel'],
    },
    {
      headline: 'Extended Business SUV',
      model: 'Lincoln Navigator L',
      image: hearstImages.lincolnNavigatorL,
      summary: 'Long-wheelbase Navigator designed for added luggage volume and rear comfort.',
      features: ['Fits up to 8 people', 'Extra cargo room for larger group transfers', 'Best for family trips and longer rides'],
    },
    {
      headline: 'Premium Midsize SUV',
      model: 'Lincoln Aviator',
      image: hearstImages.lincolnAviator,
      summary: 'Quiet and refined midsize option for private travel with upscale styling.',
      features: ['Fits up to 7 people', 'Balanced space for passengers and luggage', 'Best for city travel and evening events'],
    },
    {
      headline: 'Luxury Crossover',
      model: 'Lincoln Nautilus',
      image: hearstImages.lincolnNautilus,
      summary: 'Comfort-focused crossover for smaller groups that still expect premium service.',
      features: ['Fits up to 5 people', 'Ideal for light luggage and local transfers', 'Best for private business transportation'],
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-ink to-ink/95">
      <Seo title="Lincoln SUV Lineup - Navigator, Aviator, Nautilus | Black Car Luxury Limo" description="Explore our Lincoln SUV lineup including Navigator, Navigator L, Aviator, and Nautilus for premium chauffeur service." />
      <div className="pt-[9rem] pb-16 px-4 max-w-7xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-2 text-center">Lincoln</h1>
        <p className="text-gold text-center text-sm md:text-base mb-12">Lincoln SUV Lineup</p>
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
            Lincoln blends modern technology with signature American comfort. From the flagship Navigator to the elegant Aviator and Nautilus, this lineup is tailored for executive and premium travel.
          </p>
        </div>
      </div>
    </div>
  );
};

export default LincolnPage;
