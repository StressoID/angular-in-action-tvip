import { Component, ViewChild } from '@angular/core';
import 'rxjs/add/observable/of';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  public username: string;
  @ViewChild('userName')
  set userName(val) {
    console.log(val);
  }

  changes(event) {
    console.log(event);
  }
}
