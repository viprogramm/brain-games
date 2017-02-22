import readlineSync from 'readline-sync';

export const getUserName = () =>
  readlineSync.question('May I have your name? ');

export const getUserAnswer = number =>
  readlineSync.question(`Question ${number} `);

export const generateNumber = () =>
  Math.floor(Math.random() * 99);

export const isEven = number =>
  number % 2 === 0;

export const play = (userName) => {
  let numberOfCycles = 3;

  while (numberOfCycles > 0) {
    const number = generateNumber();
    const rightAnswer = isEven(number) ? 'yes' : 'no';
    const userAnswer = getUserAnswer(number).toLocaleLowerCase().trim();

    console.log(`Your answer: ${userAnswer}`);

    if (rightAnswer !== userAnswer) {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${rightAnswer}'.`);
      console.log(`Let's try again, ${userName}!`);
      break;
    } else {
      console.log('Correct');
    }
    numberOfCycles -= 1;
  }

  if (numberOfCycles === 0) {
    console.log(`Congratulations, ${userName}!`);
  }
};
