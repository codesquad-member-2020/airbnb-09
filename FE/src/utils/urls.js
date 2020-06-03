export const initURL = `${process.env.API_KEY}`;

export const filterURL = ({ checkin, checkout, adults, children, infants, priceMin, priceMax }) =>
  `${process.env.API_KEY}/search?checkin=${checkin}&checkout=${checkout}&adults=${adults}&children=${children}&infants=${infants}&priceMin=${priceMin}&priceMax=${priceMax}`;
