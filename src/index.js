import readlineSync from 'readline-sync';

export const getUserName = () =>
  readlineSync.question('May I have your name? ');

export const getUserAnswer = number =>
  readlineSync.question(`Question ${number} `);

export const generateNumber = () =>
  Math.floor(Math.random() * 99);

export const isEven = number =>
  number % 2 === 0;
