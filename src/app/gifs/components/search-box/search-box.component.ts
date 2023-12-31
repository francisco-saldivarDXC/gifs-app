import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { GifsService } from '../../services/gifs.service';

@Component({
  selector: 'gifs-search-box',
  template: `
    <h5>Buscar: </h5>
    <div class="d-flex">
      <input
        type="text"
        class="form-control"
        placeholder="Buscar gifs..."
        (keyup.enter)="searchTag()"
        #txtTagInput
      ><button class="btn btn-primary mx-2" (click)="searchTag()">Buscar</button>
    </div>
  `
})

export class SearchBoxComponent implements OnInit {
  @ViewChild('txtTagInput')
  public tagInput!: ElementRef<HTMLInputElement>;

  constructor(private gifsService : GifsService) { }

  ngOnInit() { }

  // searchTag( newTag : string ) {
  searchTag( ) {

    const newTag = this.tagInput.nativeElement.value;
    this.gifsService.searchGifs(this.tagInput.nativeElement.value);

    this.tagInput.nativeElement.value = '';
  }
}
