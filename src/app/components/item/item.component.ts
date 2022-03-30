import { IMAGE_SIZES } from './../../constants/image-sizes';
import { Movie } from './../../shared/models/movie';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {

  @Input() itemData:Movie | null = null;
  imageSizes = IMAGE_SIZES;
  
  constructor() { }

  ngOnInit(): void {
  }

}
