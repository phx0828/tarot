import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public spread: number = 0;
  public cardsRes: {cardNum: number, reverse: number}[] = [];

  public draw() {
    this.cardsRes = [];
    while (this.cardsRes.length < this.spread) {
      let newNum = Math.floor(Math.random() * 78) + 1;
      let reverse = Math.floor(Math.random() * 2);
      !this.cardsRes.some(card => card.cardNum == newNum) ? this.cardsRes.push({cardNum: newNum, reverse: reverse}) : null;
    }
    console.log(this.cardsRes)
  }

}
