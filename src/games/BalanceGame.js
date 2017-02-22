import { generateNumber, getBalanceNumber } from '../lib/number';
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
    return getBalanceNumber(this.num);
  }

  isCorrect(answer) {
    return this.getAnswer() === Number(answer);
  }
}
