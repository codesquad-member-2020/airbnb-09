export const listingURL = `${process.env.API_KEY}`;

export const generateFilteringURL = ({ checkin, checkout, adults, children, infants, priceMin, priceMax }) =>
  `${listingURL}/search?checkin=${checkin}&checkout=${checkout}&adults=${adults}&children=${children}&infants=${infants}&priceMin=${priceMin}&priceMax=${priceMax}`;
