import Score from '../models/Score';

export default class WinScore extends Score {

  public matchesScore(): boolean {
    return this.player1.hasWon(this.player2) || this.player2.hasWon(this.player1);
  }

  public getScore(): string {
    return `Win for ${this.getWinner()}`;
  }

  private getWinner() {
    return this.player1.hasWon(this.player2) ?
            this.player1.getName() :
            this.player2.getName();
  }
}
