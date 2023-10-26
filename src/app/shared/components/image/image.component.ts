import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'shared-image',
  templateUrl: './image.component.html'
})
export class ImageComponent implements OnInit {
  @Input()
  public src !: string;

  public loading = true;

  ngOnInit(): void {
    if( !this.src )
      throw new Error("src property is required");
  }

  onLoad() : void {
    setTimeout(() => {
      this.loading = false;
    }, 1000);
  }
}
