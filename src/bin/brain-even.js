#!/usr/bin/env node

import { getUserName, getUserAnswer, generateNumber, isEven } from '..';

console.log('Welcome to Brain Games!');
console.log('Answer "yes" if number even otherwise answer "no".\n');

const userName = getUserName();
console.log(`Hello ${userName}!`);

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
