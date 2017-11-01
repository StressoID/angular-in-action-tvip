import {Injectable} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {QuestionBase} from '../questions/base.question';
import {ArrayQuestion} from '../questions/array.question';

@Injectable()
export class DynamicFormService {

  public toFormGroup(questions) {
    const group: any = {};

    questions.forEach(question => {
      if (question.controlType === 'array') {
        this.createArrayGroup(question, group);
      } else {
        this.createBaseGroup(question, group);
      }
    });
    return new FormGroup(group);
  }

  public questionFactory(schema: any[]) {
    return schema.map(el => this.createQuestion(el));
  }

  private createQuestion(el) {
    if (el.controlType === 'array') {
      return new ArrayQuestion(el);
    }

    return new QuestionBase(el);
  }

  private createArrayGroup(question, group) {

    const arrayGroup = {};
    question.value.forEach((el, i) => {
      arrayGroup[question.key + i] = new FormControl(el);
    });
    group[question.key] = new FormGroup(arrayGroup);
  }

  private createBaseGroup(question, group) {
    group[question.key] = question.required ?
      new FormControl(question.value || '', Validators.required)
      : new FormControl(question.value || '');
  }
}
