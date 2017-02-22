import { generateNumber, gcd } from '../lib/number';
import BaseGame from './BaseGame';

export default class GcdGame extends BaseGame {
  constructor() {
    super();
    this.num1 = generateNumber();
    this.num2 = generateNumber();
  }

  getQuestion() {
    return `${this.num1} ${this.num2}`;
  }

  getAnswer() {
    return gcd(this.num1, this.num2);
  }

  isCorrect(answer) {
    return this.getAnswer() === Number(answer);
  }
}
