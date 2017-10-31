import { Component, OnInit, ViewChild } from '@angular/core';
import 'rxjs/add/observable/of';
import { HttpService } from './http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {

  public loading$;
  constructor(private httpService: HttpService) {}

  ngOnInit(): void {
    this.loading$ = this.httpService.loading$;
  }

}
