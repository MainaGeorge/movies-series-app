import { Movie } from '../../shared/models/movie';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.scss']
})
export class ItemsComponent implements OnInit {

  @Input() items:Movie[]  = [];
  @Input() title:string  = "";
  constructor() { }

  ngOnInit(): void {
  }

}
