import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

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
      'zipCode': new FormControl(null, Validators.pattern("[0-9]*"))
    });
  }

  onSubmit() {
    console.log(this.signupForm);
    console.log(this.signupForm.value);
  }
}
