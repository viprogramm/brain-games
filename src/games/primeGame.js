import { generateNumber } from '../lib/number';

const isPrime = (number) => {
  for (let i = 2; i < number; i += 1) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
};

const generateGame = a => ({
  question: `${a}`,
  answer: isPrime(a) ? 'yes' : 'no',
});

export default ({
  description: 'Answer "yes" if number is prime otherwise answer "no".',
  generate: () => generateGame(generateNumber()),
});
