import { Injectable } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { QuestionBase } from '../base.question';

@Injectable()
export class DynamicFormService {

  public toFormGroup(questions) {
    const group: any = {};
    questions.forEach(question => {
      group[question.key] = question.required ?
        new FormControl(question.value || '', Validators.required)
        : new FormControl(question.value || '');
    });
    return new FormGroup(group);
  }

  public questionFactory(schema: any[]) {
    return schema.map(el => new QuestionBase(el));
  }
}
