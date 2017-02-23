import { generateNumber, generateOperator } from './lib/number';
import { getUserName, getUserAnswer } from './lib/user';
import calcGame from './games/calcGame';
import evenGame from './games/evenGame';

const play = (gameConstructor, userName) => {
  let numberOfCycles = 3;

  while (numberOfCycles > 0) {
    const game = gameConstructor();
    const userAnswer = getUserAnswer(game.question).toLocaleLowerCase().trim();
    const rightAnswer = game.answer;
    console.log(`Your answer: ${userAnswer}`);

    if (rightAnswer === userAnswer) {
      console.log('Correct');
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${rightAnswer}'.`);
      console.log(`Let's try again, ${userName}!`);
      break;
    }

    numberOfCycles -= 1;
  }

  if (numberOfCycles === 0) {
    console.log(`Congratulations, ${userName}!`);
  }
};

export default (gameName = 'calc') => {
  const userName = getUserName();

  console.log(`Hello ${userName}!`);

  let gameConstructor;
  switch (gameName) {
    case 'calc':
      gameConstructor = () => calcGame(generateOperator(), generateNumber(), generateNumber());
      break;
    case 'even':
      gameConstructor = () => evenGame(generateNumber());
      break;
    default:
      throw new Error('Could not find the game');
  }

  play(gameConstructor, userName);
};
