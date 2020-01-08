import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImageComponent } from './image/image.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [ImageComponent],
  imports: [
    CommonModule,
  ],
  exports: [
    CommonModule,
    ImageComponent,
    FormsModule
  ]
})
export class SharedModule { }
