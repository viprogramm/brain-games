import { generateNumber, isEven } from '../lib/number';
import BaseGame from './BaseGame';

export default class EvenGame extends BaseGame {
  constructor() {
    super();
    this.num = generateNumber();
  }

  getQuestion() {
    return `${this.num}`;
  }

  getAnswer() {
    return isEven(this.num) ? 'yes' : 'no';
  }

  isCorrect(answer) {
    return this.getAnswer() === answer;
  }
}
