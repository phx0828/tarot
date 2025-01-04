import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public spread: number = 0;
  public cardsRes: number[] = [];

  public draw() {
    this.cardsRes = [];
    while (this.cardsRes.length < 5) {
      let newNum = Math.floor(Math.random() * 78) + 1;
      !this.cardsRes.includes(newNum) ? this.cardsRes.push(newNum) : null;
    }
    console.log(this.cardsRes)
  }

}
