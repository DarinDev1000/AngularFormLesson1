import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

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
      'accountType': new FormControl('Personal'),
      'name': new FormControl(null),
      'email': new FormControl(null),
      'streetAddress': new FormControl(null),
      'city': new FormControl(null),
      'country': new FormControl(null),
      'zipCode': new FormControl(null)
    });
  }

  onSubmit() {
    console.log(this.signupForm);
    console.log(this.signupForm.value);
  }
}
