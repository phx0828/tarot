import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-info',
  templateUrl: './card-info.component.html',
  styleUrls: ['./card-info.component.css']
})
export class CardInfoComponent {
  @Input()
  public cardNum: number = 0;
  public cardImgUrl: string = '';

  ngOnInit(): void {
     this.cardImgUrl = "../../assets/images/" + this.cardNum + ".jpg";
  }
}

export interface cardInfo {
  Name: string;
  cn_Name: string;
  Reverse: boolean;
}
