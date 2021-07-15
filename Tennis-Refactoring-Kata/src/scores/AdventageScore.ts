import Score from '../models/Score';

export default class AdventageScore extends Score {

  public matchesScore(): boolean {
    return this.player1.hasAdvantage(this.player2) || this.player2.hasAdvantage(this.player1);
  }

  public getScore(): string {
    return `Advantage ${this.getPlayerWithAdvantage()}`;
  }

  private getPlayerWithAdvantage(): string {
    return this.player1.hasAdvantage(this.player2) ? this.player1.getName() : this.player2.getName();
  }
}
