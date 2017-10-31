import { Component, OnInit } from '@angular/core';
import { CategoriesService } from './categories.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit {

  public data;
  constructor(private categoriesService: CategoriesService) { }

  ngOnInit() {
    this.data = this.categoriesService.getCategories();
    this.data.subscribe(items => console.log(items));
  }

}
