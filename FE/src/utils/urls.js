export const listingURL = `${process.env.API_KEY}`;

export const oauthURL = "https://github.com/login/oauth/authorize?client_id=ed017fb540a271bbf01b&scope=user%20repo";

export const generateFilteringURL = ({ checkin, checkout, adults, children, infants, priceMin, priceMax }) =>
  `${listingURL}/search?checkin=${checkin}&checkout=${checkout}&adults=${adults}&children=${children}&infants=${infants}&priceMin=${priceMin}&priceMax=${priceMax}`;
