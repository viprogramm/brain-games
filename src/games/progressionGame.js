import { generateNumber } from '../lib/number';

const generateProgression = (progressionLength = 10) => {
  const start = generateNumber(10);
  const diff = generateNumber(10);

  let current = start;
  const progressionArray = [];
  for (let i = 0; i < progressionLength; i += 1) {
    progressionArray[i] = current;
    current += diff;
  }

  return progressionArray;
};

const generateQuestion = (progressionArray, indexToHide) =>
  [...progressionArray.slice(0, indexToHide), '..', ...progressionArray.slice(indexToHide + 1)].join(' ');

const generateAnswer = (progressionArray, indexToHide) =>
  progressionArray[indexToHide].toString();

const generateGame = (progressionArray) => {
  const indexToHide = generateNumber(10);

  return {
    question: generateQuestion(progressionArray, indexToHide),
    answer: generateAnswer(progressionArray, indexToHide),
  };
};

export default ({
  description: 'What number is missing in this progression?',
  generate: () => generateGame(generateProgression()),
});
