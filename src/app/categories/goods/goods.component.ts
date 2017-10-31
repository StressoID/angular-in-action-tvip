import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GoodsService } from './goods.service';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-goods',
  templateUrl: './goods.component.html',
  styleUrls: ['./goods.component.scss']
})
export class GoodsComponent implements OnInit, OnDestroy {

  private sub: Subscription;
  public goods;
  constructor(private activatedRoute: ActivatedRoute, private goodsService: GoodsService) { }

  ngOnInit() {
    this.sub = this.activatedRoute.params.subscribe(params => {
      this.goodsService.getGoods(params.id).subscribe(goods => this.goods = goods);
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

}
