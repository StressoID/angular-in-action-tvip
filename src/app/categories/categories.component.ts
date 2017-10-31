import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../../http.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit {

  public data;
  constructor(private httpService: HttpService) { }

  ngOnInit() {
    this.data = this.httpService.get('/categories');
  }

}
