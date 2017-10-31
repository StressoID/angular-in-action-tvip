import { Component, OnInit, ViewChild } from '@angular/core';
import 'rxjs/add/observable/of';
import { HttpService } from './http.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {

  public loading$;
  public user: User = {} as User;
  constructor(private httpService: HttpService) {}

  ngOnInit(): void {
    this.loading$ = this.httpService.loading$;
  }

  submitForm(form: NgForm) {
    console.log(form);
  }

}

interface User {
  username: string;
  surname: string;
  age: number;
}
