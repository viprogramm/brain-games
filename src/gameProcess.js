import readlineSync from 'readline-sync';
import evenGame from './games/evenGame';

export default (game = evenGame) => {
  console.log('Welcome to Brain Games!');
  console.log(`${game.description}\n`);

  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello ${userName}!`);

  let numberOfCycles = 3;
  while (numberOfCycles > 0) {
    const { question, answer } = game.generate();
    const userAnswer = readlineSync.question(`Question ${question} `).toLocaleLowerCase().trim();
    console.log(`Your answer: ${userAnswer}`);

    if (answer === userAnswer) {
      console.log('Correct');
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${answer}'.`);
      console.log(`Let's try again, ${userName}!`);
      break;
    }

    numberOfCycles -= 1;
  }

  if (numberOfCycles === 0) {
    console.log(`Congratulations, ${userName}!`);
  }
};
