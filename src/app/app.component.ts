import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'AngularFormLesson1';
  accountType = ['Personal', 'Business'];
  signupForm: FormGroup;

  ngOnInit() {
    this.signupForm = new FormGroup({
      // Do not call the Validators. Only pass the reference
      'accountType': new FormControl('Personal', Validators.required),
      'name': new FormControl(null, Validators.required),
      'email': new FormControl(null, [Validators.required, Validators.email]),
      'streetAddress': new FormControl(null),
      'city': new FormControl(null),
      'country': new FormControl(null, Validators.required),
      'zipCode': new FormControl(null, Validators.pattern("[0-9]*")),
      'skills': new FormArray([])
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
    //   'zipCode': '95358'
    // });

    // // Update/patch form values
    // this.signupForm.patchValue({
    //   'email': 'darin@second-example.com'
    // });
  }

  onSubmit() {
    console.log(this.signupForm);
    console.log(this.signupForm.value);
  }

  onAddSkill() {
    const control = new FormControl(null, Validators.required);
    (this.signupForm.get('skills') as FormArray).push(control);
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
