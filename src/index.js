import { getUserAnswer } from './lib/user';
import BaseGame from './games/BaseGame';

const run = (Game, userName) => {
  let numberOfCycles = 3;

  while (numberOfCycles > 0) {
    const game = new Game();
    const userAnswer = getUserAnswer(game.getQuestion()).toLocaleLowerCase().trim();
    const rightAnswer = game.getAnswer();
    console.log(`Your answer: ${userAnswer}`);

    if (game.isCorrect(userAnswer)) {
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

export default (Game = BaseGame) => userName => run(Game, userName);
