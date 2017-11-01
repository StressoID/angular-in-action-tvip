import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-df-question',
  templateUrl: './df-question.component.html',
  styleUrls: ['./df-question.component.scss']
})
export class DfQuestionComponent implements OnInit {
  @Input() question;
  @Input() form: FormGroup;

  ngOnInit(): void {
    if (this.question.controlType === 'array') {
      console.log(this.form.controls[this.question.key]);
      console.log(this.form.controls[this.question.key]['controls']);
    }
  }

  public objectToArray(form) {
    const array_controls = [];
    for (const control of Object.keys(form.controls)) {
      array_controls.push(form.controls[control]);
    }
    console.log(form.controls);
    return array_controls;
  }
}
