import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('f') signupForm: NgForm;
  suggestUserName() {
    const suggestedName = 'Superuser';

    // this.signupForm.form.setValue({
    //   username: suggestedName,
    //   email: ""
    // });

    this.signupForm.form.patchValue({
      userData: {username: suggestedName}
    })
  }

  onSubmit() {
    console.log(this.signupForm);
    // this.signupForm.reset();
  }
}
