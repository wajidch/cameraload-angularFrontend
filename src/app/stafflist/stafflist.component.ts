import { Component, OnInit } from '@angular/core';
import { UserService } from '../common/user.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { Router } from '@angular/router';

@Component({
  selector: 'app-stafflist',
  templateUrl: './stafflist.component.html',
  styleUrls: ['./stafflist.component.css']
})
export class StafflistComponent implements OnInit {
  role=localStorage.getItem('role')
  access:boolean;
  stafflistArray;
  constructor(private userservice:UserService,private spinner:NgxSpinnerService,private route:Router) { }

  ngOnInit() {
    if(this.role==='Admin'){
      this.access=true;
    }
    else{
      this.access=false;
    }

    this.stafflist();
  }
  stafflist(){
this.spinner.show();

this.userservice.stafflist().subscribe(res =>{

  
  this.stafflistArray=res;
  this.spinner.hide();

})
  }

  edit(id){
    localStorage.setItem("selectedstaffid",id);
    this.route.navigateByUrl('editaccessright')    
  }
  detail(id){
    localStorage.setItem("selectedstaffid",id);
    this.route.navigateByUrl('staffdetail')  
  }
}
