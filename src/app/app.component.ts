import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'AngularFormLesson1';
  accountType = ['Personal', 'Business'];
  signupForm: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.signupForm = this.fb.group({
      // Do not call the Validators. Only pass the reference
      'accountType': ['Personal', Validators.required],
      'name': [null, Validators.required],
      'email': [null, [Validators.required, Validators.email, Validators.maxLength(20)]],
      'streetAddress': [null], // or ''
      'city': [null],
      'country': [null, Validators.required],
      'zipCode': [null, Validators.pattern("[0-9]*")],
      'skills': this.fb.array([])
    });

    // Subscribe to value changes
    // this.signupForm.valueChanges.subscribe(
    //   (value) => console.log(value)
    // );

    // Subscribe to valid status changes
    this.signupForm.statusChanges.subscribe(
      (status) => console.log(status)
    );

    //  // Set form values
    // this.signupForm.setValue({
    //   'accountType': 'Personal',
    //   'name': 'Darin',
    //   'email': 'darin@example.com',
    //   'streetAddress': '1212 some street',
    //   'city': 'Modesto',
    //   'country': 'United States',
    //   'zipCode': '95358',
    //   'skills': []
    // });

    // // Update/patch form values
    // this.signupForm.patchValue({
    //   'email': 'darin@second-example.com'
    // });
  }

  onSubmit() {
    console.log(this.signupForm);
    console.log(this.signupForm.value);
    this.onReset();
  }

  onAddSkill() {
    // One Line
    (this.signupForm.get('skills') as FormArray).push(this.fb.control(null, Validators.required));

    // const control = this.fb.control(null, Validators.required);
    // const skills = this.signupForm.get('skills') as FormArray;
    // skills.push(control);
  }

  onReset() {
    this.signupForm.reset();
    this.clearFormArray(this.signupForm.get('skills') as FormArray);
  }

  clearFormArray = (formArray: FormArray) => {
    while (formArray.length !== 0) {
      formArray.removeAt(0);
    }
  }
}
