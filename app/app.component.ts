import { Component } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { BsLocaleService, defineLocale } from 'ngx-bootstrap'
import { itLocale } from 'ngx-bootstrap/locale';

@Component({
  selector: 'my-app',
  template: `
  <div class="m-5">
    <p>
      Please copy and paste this date to fire the bug: &nbsp; &nbsp; <b>2004-10-04T10:00:00.000+0000</b>
    <br>
      The result on italian format DD/MM/YYYY would be 04/10/2004.
    <br>
      The result on field value is correct.
    <br>
    <br>
      <b>Instead the displayed result (20/04/2010) is wrong ! </b>
    </p>
  </div>
  <div class="m-5">
    <form [formGroup]="myForm">
      <div class="row ">
        <div class="col-xs-12 col-12 col-sm-6 col-md-4 form-group ">
          <input type="text" class="form-control" placeholder="Datepicker" bsDatepicker formControlName="date" />
        </div>
      </div>
    </form>
    
    <div class="row ">
      <div class="col-xs-12 col-md-12 ">
        <pre class="code-preview ">{{myForm.value | json}}</pre>
      </div>
    </div>
  </div>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  myForm: FormGroup;

  constructor(private formBuilder: FormBuilder,
    private localeService: BsLocaleService) {
    defineLocale('it', itLocale);

    this.localeService.use('it');
  }

  ngOnInit() {
    this.myForm = this.formBuilder.group({
      date: null,
    });
  }
}
