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

const getFirstTo = (min, priceGap) => {
  let firstTo = priceGap;
  while (min > firstTo) {
    firstTo += priceGap;
  }
  return firstTo;
};

export const generateFormattedPrices = ({ average, min, max, priceGap, countList }) => {
  const initialRange = {
    key: `0-${min - min + priceGap}`,
    from: min,
    to: getFirstTo(min, priceGap),
    count: countList[0],
  };

  const range = countList.slice(1, countList.length - 1).reduce(
    (acc, curr, i) => {
      acc.push({
        key: `${acc[i].to}-${acc[i].to + priceGap}`,
        from: acc[i].to,
        to: acc[i].to + priceGap,
        count: curr,
      });
      return acc;
    },
    [initialRange],
  );

  const pos = [0, countList.length - 1];

  return {
    average,
    min,
    max,
    range,
    pos,
  };
};
