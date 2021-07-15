import Player from './Player';

export default abstract class Score {
  protected player1: Player;
  protected player2: Player;

  constructor(player1: Player, player2: Player) {
    this.player1 = player1;
    this.player2 = player2;
  }

  public abstract matchesScore(): boolean;
  public abstract getScore(): string;
}
