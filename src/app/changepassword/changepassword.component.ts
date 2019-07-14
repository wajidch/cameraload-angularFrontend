import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UserService } from '../common/user.service';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-changepassword',
  templateUrl: './changepassword.component.html',
  styleUrls: ['./changepassword.component.css']
})
export class ChangepasswordComponent implements OnInit {

  changePasswordForm:FormGroup;
  changePasswordMdg:string;
  constructor(private userservice:UserService,private spinner:NgxSpinnerService) { }
  user_id=localStorage.getItem('user_id');

  ngOnInit() {
    this.changePasswordForm = new FormGroup({
      password: new FormControl('',[Validators.required]),
   
    });
  }

  changePassword(val){
    this.spinner.show();
let passwordObj={
  password:val.password,
  user_id:this.user_id
}
    this.userservice.changePassword(passwordObj).subscribe((res:any)=>{

      this.changePasswordMdg='Password Changed';
      this.spinner.hide();
    })

  }

}
