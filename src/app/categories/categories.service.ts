import { Injectable } from '@angular/core';
import { HttpService } from '../http.service';
import { Category } from './category.interface';

@Injectable()
export class CategoriesService {

  constructor(private httpService: HttpService) { }

  public getCategories() {
    return this.httpService.get<Category[]>('/categories');
  }

}
