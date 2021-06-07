import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {
  genders: string[] = ["female", "male", "other"];
  forbiddenUsernames = ["Forbidden", "Voldemort"];
  forbiddenEmails = ["test@example.com", "forbidden@forbidden.com"];
  signupForm: FormGroup;
  constructor() { }

  ngOnInit(): void {
    this.signupForm = new FormGroup({
      "userData": new FormGroup({
        "username": new FormControl(null, [Validators.required, this.forbiddenNames.bind(this)]),
        "email": new FormControl(null, [Validators.required, Validators.email],this.forbiddenEmail.bind(this))
      }),
      "gender": new FormControl(this.genders[0])
    })
  };

  forbiddenNames(control: FormControl): {[s: string]: boolean} {
    if(this.forbiddenUsernames.indexOf(control.value) > -1) {
      return {'nameIsForbidden': true}
    } 
    return null;
  };

  forbiddenEmail(control: FormControl): Promise<any> | Observable<any> {
    const promise = new Promise<any>((resolve, reject) => {
      setTimeout(()=> {
        if(this.forbiddenEmails.indexOf(control.value) > -1) {
          resolve({'emailIsForbidden': true})
        } else {
          resolve(null)
        }
      }, 1500)
    });

    return promise
  }

  onSubmit(){
    console.log(this.signupForm);
  }

}
