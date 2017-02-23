export default (operator, a, b) => {
  const getAnswer = () => {
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

  return {
    question: `${a} ${operator} ${b}`,
    answer: getAnswer().toString(),
  };
};
