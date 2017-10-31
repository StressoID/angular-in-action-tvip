import { Injectable } from '@angular/core';
import { HttpService } from '../../http.service';

@Injectable()
export class GoodsService {

  constructor(private httpService: HttpService) { }

  public getGoods(i) {
    return this.httpService.get(`categories/${i}/goods`);
  }

}
