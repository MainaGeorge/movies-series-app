import { IMAGE_SIZES } from './../../constants/image-sizes';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, Input, OnInit } from '@angular/core';
import { Movie } from 'src/app/shared/models/movie';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss'],
  animations: [
    trigger('fade', [
      state('void', style({opacity: 0})),
      transition('void <=> *', [animate('1s')]),
    ])
  ]
})
export class SliderComponent implements OnInit {

  @Input() movies:Movie[] = [];
  currentSlideIndex:number = 0;
  readonly imageSizes = IMAGE_SIZES;

  constructor() { }

  ngOnInit(): void {
    setInterval(() => {
      this.currentSlideIndex = this.currentSlideIndex % this.movies.length;
    }, 5000)
  }

}
