import { Component, OnInit } from '@angular/core';
import { UserService } from '../common/user.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-staffdetail',
  templateUrl: './staffdetail.component.html',
  styleUrls: ['./staffdetail.component.css']
})
export class StaffdetailComponent implements OnInit {
  selectedstaffid=localStorage.getItem('selectedstaffid')
  staffdetailForm:FormGroup

  constructor(private userservice:UserService,private spinner:NgxSpinnerService) { }

  ngOnInit() {
    this.stafflistbyId();
  }
  stafflistbyId(){
    this.spinner.show();
    
    this.userservice.accessright(this.selectedstaffid).subscribe((res:any)=>{

      this.staffdetailForm = new FormGroup({
        staff_id: new FormControl(res.response.staff_id,[Validators.required]),
        email:new FormControl(res.response.staff_id,[Validators.required]),
        first_name:new FormControl(res.response.first_name,[Validators.required]),
        last_name:new FormControl(res.response.first_name,[Validators.required]),
        mobile_no:new FormControl(res.response.first_name,[Validators.required]),
        department:new FormControl(res.response.department,[Validators.required]),
        job_title:new FormControl(res.response.job_title,[Validators.required]),
        role:new FormControl(res.response.role,[Validators.required]),
     
      });
      this.spinner.hide();
    })
  }
}
