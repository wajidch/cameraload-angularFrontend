import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import { UserService } from '../common/user.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  email;
  password;
  message
  loginRes;
  loginForm: FormGroup;

  constructor(private router: Router,private userService:UserService) { }

  ngOnInit() {
    this.loginForm = new FormGroup({
      email: new FormControl('',[Validators.required]),
      password: new FormControl('',[Validators.required]),
   
    });
  }

  
  login(val) {
    this.email = val.email;
    this.password = val.password;
    this.userService.login(val.email, val.password).subscribe(
      (res: any) => {
        console.log(res)
        this.loginRes = res;
        if (this.loginRes.statusCode === 314) {
         this.message=this.loginRes.message;
        } else if (this.loginRes.statusCode === 404) {
            this.message='email or password incorrect';
        } else if (this.loginRes.statusCode === 200) {
          // this.preDashboard = false;
         
          this.message='';
          // localStorage.setItem('token', this.loginRes.data.token);
          // localStorage.setItem('user_id', this.loginRes.data.id);
          localStorage.setItem('role', this.loginRes.response.role);
          
            this.router.navigateByUrl('home')
         
        } 
      },
      (error: any) => {
      
      });
     }
  
}
