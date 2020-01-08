import { Component, OnInit, Input, Output } from '@angular/core';
import { Interpolation } from '@angular/compiler';

@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.css']
})
export class ImageComponent implements OnInit {

  @Input() urlImage: string;
  constructor() { }

  ngOnInit() {
  }

}
