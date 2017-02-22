import { generateNumber, getOperator } from '../lib/number';
import BaseGame from './BaseGame';

export default class CalcGame extends BaseGame {
  constructor() {
    super();
    this.operator = getOperator();
    this.num1 = generateNumber();
    this.num2 = generateNumber();
  }

  getQuestion() {
    return `${this.num1} ${this.operator} ${this.num2}`;
  }

  getAnswer() {
    switch (this.operator) {
      case '*':
        return this.num1 * this.num2;
      case '+':
        return this.num1 + this.num2;
      case '-':
        return this.num1 - this.num2;
      default:
        throw new Error('Unknown operator');
    }
  }

  isCorrect(num) {
    return this.getAnswer() === Number(num);
  }
}
