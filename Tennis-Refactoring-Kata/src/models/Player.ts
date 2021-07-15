export default class Player {
  private name: string;
  private score: number;

  constructor(name: string) {
    this.name = name;
    this.score = 0;
  }

  public getScore(): number {
    return this.score;
  }
  public getName(): string {
    return this.name;
  }

  public wonPoint(): void {
    this.score++;
  }

  public hasAdvantage(versusPlayer: Player): boolean {
    return (this.score >= 4 && this.score - versusPlayer.getScore()) === 1;
  }

  public hasWon(versusPlayer: Player): boolean {
    return this.score >= 4 && this.score - versusPlayer.getScore() >= 2;
  }
}
