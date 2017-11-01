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
    }
  }

  public objectToArray(form) {
    const array_controls = [];
    for (const control of Object.keys(form.controls)) {
      array_controls.push(form.controls[control]);
    }
    return array_controls;
  }
}
