import Score from '../models/Score';

export default class DeuceScore extends Score {

  public matchesScore(): boolean {
    return this.player1.getScore() === this.player2.getScore() && this.player1.getScore() >= 3;
  }

  public getScore(): string {
    return 'Deuce';
  }
}
