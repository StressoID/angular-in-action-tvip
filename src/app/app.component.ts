import { Component } from '@angular/core';
import 'rxjs/add/observable/of';
import { QuestionBase } from './shared/base.question';
import { DynamicFormService } from './shared/services/dynamic-form.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {

  public formJSONSchema = [
    {
      key: 'username',
      label: 'Username',
      required: true,
      value: null
    },
    {
      key: 'surname',
      label: 'Surname',
      required: true,
      value: null
    },
  ];
  public questions: QuestionBase<any>[];

  constructor(private dymanicFormService: DynamicFormService) {
    this.questions = dymanicFormService.questionFactory(this.formJSONSchema);
  }
}

