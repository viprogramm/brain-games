export const generateNumber = () =>
  Math.floor(Math.random() * 99);

export const isEven = number =>
  number % 2 === 0;

export const getOperator = () => {
  const operators = ['*', '+', '-'];
  return operators[Math.floor((Math.random() * 10) / 3.4)];
};
