import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { ImageComponent } from './components/image/image.component';



@NgModule({
  declarations: [
    SidebarComponent,
    ImageComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    SidebarComponent,
    ImageComponent
  ]
})
export class SharedModule { }
