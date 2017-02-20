import readlineSync from 'readline-sync';

export const printMessage = (message) => {
  console.log(message);
};

export const askQuestion = (question) => {
  return readlineSync.question(question);
};
