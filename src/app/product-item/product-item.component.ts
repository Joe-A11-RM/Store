import { Component, Input, OnInit } from '@angular/core';
import { CategoryTable } from '../CategoryTable';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {
 @Input() column:CategoryTable
  constructor() {
    this.column ={
      title:'',
      categories_1:'',
      categories_2:'',
      categories_3:'',
      categories_4:'',
      categories_5:'',
      categories_6:'',
    }
   }

  ngOnInit(): void {
  }

}
