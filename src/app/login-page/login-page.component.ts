import { Component, OnInit } from '@angular/core';
import { FormControl,  Validators, FormGroup,  } from '@angular/forms';
import { CustomValidators } from '../custom.validator';
import {HttpClient} from '@angular/common/http'
@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

  constructor( private http:HttpClient) { }

  ngOnInit(): void {
  }
  registerForm = new FormGroup({
    firstname: new FormControl(null, [Validators.required,]),
    lastname: new FormControl(null, [Validators.required]),
    mailId: new FormControl(null, [Validators.required ,Validators.email]),
    UserName: new FormControl(null, [Validators.required]),
    Password: new FormControl(null, [Validators.required,Validators.pattern("(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}")]),
    confirmPassword: new FormControl(null, [Validators.required])
  },
    // add custom Validators to the form, to make sure that password and passwordConfirm are equal
    { validators: CustomValidators.passwordsMatching }
  )
  OnSubmit(data:any){
    console.log(data);
    alert("Registration sucessful !!!")
    this.http.post('http://localhost:8080/registerUser',data)
    .subscribe((result)=>{
         console.log("result",result)
    })
  }
  loginPage(){
    alert("Login successful !!!")
  }

}
