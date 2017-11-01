import { Injectable } from '@angular/core';
import {HttpService} from '../../http.service';

@Injectable()
export class GoodsService {

  constructor(private http: HttpService) { }

  public getGoods(id) {
    return this.http.get(`categories/${id}/goods`);
  }
}
