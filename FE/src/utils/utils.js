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
