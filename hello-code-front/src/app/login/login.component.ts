import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { User } from 'src/app/models/User';
import { validPseudo } from '../helpers/validPseudo.validator';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  isSubmitted  =  false;

  constructor(private authService: AuthService, private router: Router, private formBuilder: FormBuilder ) { 
    this.loginForm = formBuilder.group({
      title: formBuilder.control('initial value', Validators.required)
    });
  }
  
  ngOnInit() {
      this.loginForm  =  this.formBuilder.group({
          pseudo: ['', Validators.required]
      },{
        validator: validPseudo('pseudo')
      });
  }

  get formControls() { return this.loginForm.controls; }
  
  login(){
    //console.log(this.loginForm.value);
    this.isSubmitted = true;
    if(this.loginForm.invalid){
      return;
    }
    this.authService.seConnecter(this.loginForm.value);
    this.router.navigateByUrl('/menu');
  }

}
