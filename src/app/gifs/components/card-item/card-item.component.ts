import { Component, Input } from '@angular/core';
import { Gif } from '../../interfaces/gifs.interfaces';

@Component({
  selector: 'gifs-card-item',
  templateUrl: './card-item.component.html',
})
export class CardItemComponent {
  @Input()
  gif !: Gif;
}
