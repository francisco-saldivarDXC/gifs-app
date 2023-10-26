import { Component, Input, OnInit } from '@angular/core';
import { Gif } from '../../interfaces/gifs.interfaces';

@Component({
  selector: 'gifs-card-item',
  templateUrl: './card-item.component.html',
})
export class CardItemComponent implements OnInit {
  @Input()
  gif !: Gif;

  ngOnInit(): void {
    if(!this.gif)
      throw new Error('Method not implemented.');
  }
}
