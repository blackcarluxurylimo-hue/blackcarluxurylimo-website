import { assetUrl, hearstImages } from '../utils/assets.js';

export const services = [
  {
    title: 'Airport Transfers',
    description:
      'On-time chauffeur service for JFK, LGA, and EWR with live flight tracking and meet-and-greet options.',
    image: assetUrl('airport-transfer-service.jpg'),
  },
  {
    title: 'Wedding Limo Service',
    description:
      'Elegant transportation with polished vehicles and professional chauffeurs for a seamless celebration.',
    image: hearstImages.lincolnNavigator,
  },
  {
    title: 'Corporate Rides',
    description:
      'Executive transportation for meetings, roadshows, and client hospitality with punctual scheduling.',
    image: hearstImages.mercedesGls,
  },
  {
    title: 'Hourly Chauffeur Service',
    description:
      'Flexible point-to-point and multi-stop rides with a dedicated private chauffeur by the hour.',
    image: hearstImages.teslaModelX,
  },
];
