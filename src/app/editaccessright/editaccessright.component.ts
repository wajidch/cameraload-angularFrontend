import { Component, OnInit } from '@angular/core';
import { UserService } from '../common/user.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-editaccessright',
  templateUrl: './editaccessright.component.html',
  styleUrls: ['./editaccessright.component.css']
})
export class EditaccessrightComponent implements OnInit {
  editaccessForm:FormGroup
  accessRightMsg;
  selectedstaffid=localStorage.getItem('selectedstaffid')
  constructor(private userservice:UserService,private spinner:NgxSpinnerService) { }

  ngOnInit() {

    this.editaccessForm = new FormGroup({
      staff_id: new FormControl('',[Validators.required]),
      first_name:new FormControl('',[Validators.required]),
      department:new FormControl('',[Validators.required]),
      job_title:new FormControl('',[Validators.required]),
      role:new FormControl('',[Validators.required]),
   
    });
    this.stafflistbyId();
  }
  stafflistbyId(){
    this.spinner.show();
    
    this.userservice.accessright(this.selectedstaffid).subscribe((res:any)=>{

      this.editaccessForm = new FormGroup({
        staff_id: new FormControl(res.response.staff_id,[Validators.required]),
        first_name:new FormControl(res.response.first_name,[Validators.required]),
        department:new FormControl(res.response.department,[Validators.required]),
        job_title:new FormControl(res.response.job_title,[Validators.required]),
        role:new FormControl(res.response.role,[Validators.required]),
     
      });
      this.spinner.hide();
    })
  }
  changeRight(val){
this.spinner.show();
  let changeRightobj={
    id:this.selectedstaffid,
    staff_id:val.staff_id,
    first_name:val.first_name,
    department:val.department,
    job_title:val.job_title,
    role:val.role
  }
    this.userservice.editaccessRight(changeRightobj).subscribe((res:any)=>{

      this.accessRightMsg='Access right updated';
      this.spinner.hide();
    })

  }
}
