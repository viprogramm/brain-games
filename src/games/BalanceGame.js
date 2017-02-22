import { generateNumber, getBalance } from '../lib/number';
import BaseGame from './BaseGame';

export default class BalanceGame extends BaseGame {
  constructor() {
    super();
    this.num = generateNumber() * generateNumber();
  }

  getQuestion() {
    return `${this.num}`;
  }

  getAnswer() {
    return getBalance(this.num);
  }

  isCorrect(answer) {
    return this.getAnswer() === answer;
  }
}
