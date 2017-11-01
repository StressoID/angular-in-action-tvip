import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-df-question',
  templateUrl: './df-question.component.html',
  styleUrls: ['./df-question.component.scss']
})
export class DfQuestionComponent {

  @Input() question;
  @Input() form: FormGroup;

}
