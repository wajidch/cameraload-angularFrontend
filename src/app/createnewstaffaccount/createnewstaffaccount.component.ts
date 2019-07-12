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

      

   
    });

    
  }
  addnewAccount(val){
this.spinner.show();
    this.userservice.addnewaccount(val).subscribe(res =>{

this.accountAddmsg='New Account Created';
      this.spinner.hide();

    })
  }
}
