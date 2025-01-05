import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-info',
  templateUrl: './card-info.component.html',
  styleUrls: ['./card-info.component.css']
})
export class CardInfoComponent {
  @Input()
  public cardInfo: {cardNum: number, reverse: number} = {} as any;
  public cardImgUrl: string = '';
  public reverse: boolean = false;

  ngOnInit(): void {
    this.cardInfo.reverse === 1 ? this.reverse = true : this.reverse = false;
    this.cardImgUrl = "assets/images/" + this.cardInfo.cardNum + ".jpg";
  }
}

export interface cardInfo {
  Name: string;
  cn_Name: string;
  Reverse: boolean;
}
