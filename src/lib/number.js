export const generateNumber = () =>
  Math.floor(Math.random() * 99);

export const generateOperator = () => {
  const operators = ['*', '+', '-'];
  return operators[Math.floor((Math.random() * 10) / 3.4)];
};

export const isEven = number =>
number % 2 === 0;

export const gcd = (a, b) => {
  if (b === 0) {
    return Math.abs(a);
  }
  return gcd(b, a % b);
};

export const getSortedNumbersArray = (number) => {
  const arr = Array.from(number.toString()).map(Number);
  return arr.concat().sort();
};

export const getBalance = (number) => {
  const sortedNumbers = getSortedNumbersArray(number);
  let rebalance = false;
  for (let i = 1; i < sortedNumbers.length; i += 1) {
    if (sortedNumbers[i - 1] + 1 < sortedNumbers[i]) {
      rebalance = true;
      const half = (sortedNumbers[i - 1] + sortedNumbers[i]) / 2;
      sortedNumbers[i - 1] = Math.floor(half);
      sortedNumbers[i] = Math.ceil(half);
    }
  }

  const updatedNumber = sortedNumbers.join('');
  if (rebalance) {
    return getBalance(updatedNumber);
  }
  return updatedNumber;
};
