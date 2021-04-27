import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
    title = 'reactive';

  myForm: FormGroup;
  public submitted: boolean = false;
  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.myForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phoneNumber: ['', [Validators.required, Validators.minLength(9)]],
      age: [null, Validators.required],
      gender: ['', Validators.required],
      dob: ['', Validators.required],
      country: ['', Validators.required],
      check: ['', Validators.required],

    });
  }

  onSubmit(form: FormGroup) {
    console.log('Valid?', form.valid); // true or false
    console.log('firstName', form.value.firstName);
    console.log('lastName', form.value.lastName);
    console.log('email', form.value.email);
    console.log('phoneNumber', form.value.phoneNumber);
    console.log('age', form.value.age);
    console.log('gender', form.value.gender);
    console.log('dob', form.value.dob);
    console.log('country', form.value.country);
    console.log('check', form.value.check);


    this.submitted = true;

        // stop here if form is invalid
        if (this.myForm.invalid) {
            return;
        }

        alert('SUCCESS!! :-)')

  }
}