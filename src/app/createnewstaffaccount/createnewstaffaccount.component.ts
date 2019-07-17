import { Component, OnInit } from '@angular/core';
import { UserService } from '../common/user.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-createnewstaffaccount',
  templateUrl: './createnewstaffaccount.component.html',
  styleUrls: ['./createnewstaffaccount.component.css']
})
export class CreatenewstaffaccountComponent implements OnInit {

  newaccountForm:FormGroup
  accountAddmsg: string;
  passwordNotMatched:string;
  alreadyRecord: string;
  constructor(private userservice:UserService,private spinner:NgxSpinnerService) { }

  ngOnInit() {

    this.newaccountForm= new FormGroup({
      staff_id: new FormControl('',[Validators.required]),
      email: new FormControl('',[Validators.required]),
      first_name: new FormControl('',[Validators.required]),

      last_name: new FormControl('',[Validators.required]),

      mobile_no: new FormControl('',[Validators.required]),
      department: new FormControl('',[Validators.required]),

      job_title: new FormControl('',[Validators.required]),

      role: new FormControl('',[Validators.required]),
      password:new FormControl('',[Validators.required]),
      confrimpassword:new FormControl('',[Validators.required]),


      

   
    });

    
  }
  addnewAccount(val){
this.spinner.show();
if(val.password!=val.confrimpassword){
  this.passwordNotMatched='Password not matched';
  this.accountAddmsg='';
  this.alreadyRecord='';
  this.spinner.hide();

}
else{
    this.userservice.addnewaccount(val).subscribe((res:any) =>{

      console.log("ss",val.password,val.confrimpassword);
      if(res.statusCode===420){
        this.passwordNotMatched='';
        this.accountAddmsg='';
        this.alreadyRecord='This user already register with us'
        this.spinner.hide();
      }
     
     else{
       this.passwordNotMatched='';
       this.alreadyRecord='';
       this.accountAddmsg='New Account Created';
       this.spinner.hide();
     }
      this.spinner.hide();

    })
  }}
}
