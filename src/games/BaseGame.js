export default class BaseGame {
  constructor() {
    this.errorMessage = 'Should be overwritten';
  }

  getQuestion() {
    throw new Error(this.errorMessage);
  }

  getAnswer() {
    throw new Error(this.errorMessage);
  }

  isCorrect() {
    throw new Error(this.errorMessage);
  }
}
