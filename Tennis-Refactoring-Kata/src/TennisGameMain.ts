import Player from './models/Player';
import { TennisGame } from './interfaces/TennisGame';
import DefaultScore from './scores/DefaultScore';
import DeuceScore from './scores/DeuceScore';
import WinScore from './scores/WinScore';
import AdventageScore from './scores/AdventageScore';

export class TennisGameMain implements TennisGame {
  private player1: Player;
  private player2: Player;

  constructor(player1Name: string, player2Name: string) {
    this.player1 = new Player(player1Name);
    this.player2 = new Player(player2Name);
  }

  getScore(): string {
    let score: string;

    [
      new DefaultScore(this.player1, this.player2),
      new AdventageScore(this.player1, this.player2),
      new DeuceScore(this.player1, this.player2),
      new WinScore(this.player1, this.player2)
    ].forEach(s => s.matchesScore() ? score = s.getScore() : '');

    return score;
  }

  wonPoint(playerName: string): void {
    playerName === this.player1.getName() ? this.player1.wonPoint() : this.player2.wonPoint();
  }
}
