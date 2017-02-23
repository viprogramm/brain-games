import { generateNumber } from '../lib/number';

const generateOperator = () => {
  const operators = ['*', '+', '-'];
  return operators[Math.floor((Math.random() * 10) / 3.4)];
};

const getAnswer = (operator, a, b) => {
  switch (operator) {
    case '*':
      return a * b;
    case '+':
      return a + b;
    case '-':
      return a - b;
    default:
      throw new Error('Unknown operator');
  }
};

const generateGame = (operator, a, b) => ({
  question: `${a} ${operator} ${b}`,
  answer: getAnswer(operator, a, b).toString(),
});

export default {
  description: 'What is the result of the expression?',
  generate: () => generateGame(generateOperator(), generateNumber(), generateNumber()),
};
