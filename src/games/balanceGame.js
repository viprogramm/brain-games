import { generateNumber } from '../lib/number';

const getSortedNumbersArray = (number) => {
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

const generateGame = a => ({
  question: `${a}`,
  answer: getBalance(a).toString(),
});

export default ({
  description: 'Balance the given number.',
  generate: () => generateGame(generateNumber() * generateNumber()),
});
