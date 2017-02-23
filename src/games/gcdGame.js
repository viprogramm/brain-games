import { generateNumber } from '../lib/number';

export const gcd = (a, b) => {
  if (b === 0) {
    return Math.abs(a);
  }
  return gcd(b, a % b);
};

const generateGame = (a, b) => ({
  question: `${a} ${b}`,
  answer: gcd(a, b).toString(),
});

export default ({
  description: 'Find the greatest common divisor of given numbers..',
  generate: () => generateGame(generateNumber(), generateNumber()),
});
