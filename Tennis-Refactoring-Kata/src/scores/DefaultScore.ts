import { SCORES_LIST } from '../constants/constants';
import Score from '../models/Score';

export default class DefaultScore extends Score {
  private scores: string[] = SCORES_LIST;

  public matchesScore(): boolean {
    return (
      this.player1.getScore() < 4 &&
      this.player2.getScore() < 4 &&
      !(this.player1.getScore() + this.player2.getScore() === 6));
  }

  public getScore(): string {
    let isDraw = this.player1.getScore() === this.player2.getScore();

    return isDraw ?
          `${this.scores[this.player1.getScore()]}-All` :
          `${this.scores[this.player1.getScore()]}-${this.scores[this.player2.getScore()]}`;
  }
}
