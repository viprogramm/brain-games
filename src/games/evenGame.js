import { generateNumber } from '../lib/number';

const isEven = number => number % 2 === 0;

const generateGame = a => ({
  question: `${a}`,
  answer: isEven(a) ? 'yes' : 'no',
});

export default ({
  description: 'Answer "yes" if number even otherwise answer "no".',
  generate: () => generateGame(generateNumber()),
});
