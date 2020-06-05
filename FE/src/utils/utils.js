export const isSameObject = (value, other) => JSON.stringify(value) === JSON.stringify(other);

export const isSameValue = (value, other) => value === other;

export const smallerThanMinNum = (minNum, num) => minNum >= num;

export const largerThanMaxNum = (maxNum, num) => maxNum <= num;

export const getTotalNumOfValue = obj =>
  Object.values(obj).reduce((totalNum, curr) => {
    totalNum += curr;
    return totalNum;
  }, 0);

export const toMonthDayString = str => `${str.month() + 1}월 ${str.date()}일`;

export const formatDate = date => date.format("YYYY[-]MM[-]DD");

export const addedWonUnitRate = rate => `₩${rate}`;

export const renderGuestButtonText = state => {
  let numOfGuests = 0;
  let numOfInfants = 0;

  Object.entries(state).forEach(([type, num]) => {
    if (type !== "infants") numOfGuests += num;
    else numOfInfants += num;
  });

  if (numOfGuests <= 0) return `게스트`;
  return numOfInfants > 0 ? `게스트 ${numOfGuests}명, 유아 ${numOfInfants}명` : `게스트 ${numOfGuests}명`;
};

export const deleteCookie = name => {
  const updatedCookie = `${encodeURIComponent(name)}=${encodeURIComponent("")};max-age=-1`;
  document.cookie = updatedCookie;

export const formatPrice = price => {
  let priceWithComma = "";
  const priceInString = price.toString();
  for (let i = priceInString.length; i > 0; i -= 3) {
    i - 3 > 0
      ? (priceWithComma = `,${priceInString.slice(i - 3, i)}${priceWithComma}`)
      : (priceWithComma = `${priceInString.slice(0, i)}${priceWithComma}`);
  }
  return priceWithComma;
};

/*
  generate data for price slider
*/

const getFirstTo = (min, priceInterval) => {
  let firstTo = priceInterval;
  while (min > firstTo) {
    firstTo += priceInterval;
  }
  return firstTo;
};

export const generateFormattedPrices = ({ average, min, max, priceInterval, counts }) => {
  const initialRange = {
    key: `0-${min - min + priceInterval}`,
    from: min,
    to: getFirstTo(min, priceInterval),
    count: counts[0],
  };

  const range = counts.slice(1, counts.length - 1).reduce(
    (acc, curr, i) => {
      acc.push({
        key: `${acc[i].to}-${acc[i].to + priceInterval}`,
        from: acc[i].to,
        to: acc[i].to + priceInterval,
        count: curr,
      });
      return acc;
    },
    [initialRange],
  );

  const pos = [0, counts.length - 1];

  return {
    average,
    min,
    max,
    range,
    pos,
  };
};
