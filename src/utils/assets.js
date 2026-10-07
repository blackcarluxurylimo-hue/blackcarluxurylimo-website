export const assetUrl = (fileName) => `${import.meta.env.BASE_URL}assets/${fileName}`;

// Lifestyle photos — executives & elite clients in luxury black cars (Pexels free license)
export const executiveImages = {
	// Chauffeur smiling as he opens black car door for a woman with sunglasses — VIP arrival
	boardMemberEntering: assetUrl('board-member-entering.jpg'),
	// Two executives with umbrella beside luxury black car — rainy city day
	chauffeurOpensDoor: assetUrl('chauffeur-opens-door.jpg'),
	// Stylish man in gray suit seated in a luxury car, composed and confident
	ceoInBackseat: assetUrl('ceo-in-backseat.jpg'),
	// Executive driving luxury car while on a phone call — power in motion
	chauffeurDriving: assetUrl('chauffeur-driving.jpg'),
	// Senior female executive inside luxury black car — authority and elegance
	cfoExiting: assetUrl('cfo-exiting.jpg'),
	// Bald executive in black suit approaching a luxury black car — decisive arrival
	corporatePitch: assetUrl('corporate-pitch.jpg'),
};

export const hearstImages = {
  teslaModelX: assetUrl('tesla-model-x.jpg'),
  teslaModelS: assetUrl('tesla-model-s.jpg'),
  teslaModel3: assetUrl('tesla-model-3.jpg'),
  teslaModelY: assetUrl('tesla-model-y.jpg'),
  teslaCybertruck: assetUrl('tesla-cybertruck.jpg'),
  mercedesGls: assetUrl('mercedes-gls.jpg'),
  mercedesGle: assetUrl('mercedes-gle.jpg'),
  mercedesGClass: assetUrl('mercedes-gclass.jpg'),
  mercedesEqsSuv: assetUrl('mercedes-eqs-suv.jpg'),
  cadillacEscalade: assetUrl('cadillac-escalade.jpg'),
  cadillacEscaladeEsv: assetUrl('cadillac-escalade-esv.jpg'),
  cadillacEscaladeV: assetUrl('cadillac-escalade-v.jpg'),
  cadillacEscaladeIql: assetUrl('cadillac-escalade-iql.jpg'),
  lincolnNavigator: assetUrl('lincoln-navigator.jpg'),
  lincolnNavigatorL: assetUrl('lincoln-navigator-l.jpg'),
  lincolnAviator: assetUrl('lincoln-aviator.jpg'),
  lincolnNautilus: assetUrl('lincoln-nautilus.jpg'),
  chevroletSuburban: assetUrl('chevrolet-suburban.jpg'),
  chevroletSuburbanAlt: assetUrl('chevrolet-suburban-alt.jpg'),
  chevroletSuburbanInterior: assetUrl('chevrolet-suburban-interior.jpg'),
  // B&W studio shot: black Cadillac Escalade with professional chauffeur — Book Your Ride section
  bookYourRideEscalade: assetUrl('book-your-ride-escalade.webp'),
};

// 2026 client-supplied fleet photography
export const fleetImages = {
  cadillacEscalade2026: assetUrl('cadillac-escalade-2026.jpg'),
  chevySuburban2026: assetUrl('chevy-suburban-2026.png'),
  lincolnNavigator2026: assetUrl('lincoln-navigator-2026.png'),
  mercedesS580: assetUrl('mercedes-s580.png'),
  gmcYukon: assetUrl('gmc-yukon.png'),
  cadillacCt6: assetUrl('cadillac-ct6.png'),
  bmw750i: assetUrl('bmw-750i.png'),
  cadillacLyriq: assetUrl('cadillac-lyriq.png'),
  jetSprinterVan: assetUrl('jet-sprinter-van.png'),
  limoSprinterVan: assetUrl('limo-sprinter-van.png'),
};
