import { Component, Input, OnInit } from '@angular/core';
import { DynamicFormService } from '../../services/dynamic-form.service';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-dynamic-form',
  templateUrl: './dynamic-form.component.html',
  styleUrls: ['./dynamic-form.component.scss']
})
export class DynamicFormComponent implements OnInit {

  public form: FormGroup;
  @Input() questions;

  constructor(private dynamicFormService: DynamicFormService) { }

  ngOnInit() {
    this.form = this.dynamicFormService.toFormGroup(this.questions);
    console.log(this.form);
  }

  submit() {
    console.log(this.form);
  }

}
