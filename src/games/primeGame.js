import { generateNumber } from '../lib/number';

const isPrime = (number) => {
  const recursion = (divisor) => {
    if (divisor >= number) {
      return true;
    } else if (number % divisor === 0) {
      return false;
    }

    return recursion(divisor + 1);
  };

  return recursion(2);
};


const generateGame = a => ({
  question: `${a}`,
  answer: isPrime(a) ? 'yes' : 'no',
});

export default ({
  description: 'Answer "yes" if number is prime otherwise answer "no".',
  generate: () => generateGame(generateNumber()),
});
