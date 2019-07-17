import { Component, OnInit } from '@angular/core';
import { UserService } from '../common/user.service';
import { NgxSpinnerService } from 'ngx-spinner';
import * as moment from 'moment';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
role=localStorage.getItem('role')
access:boolean;
announcement;
noalert:boolean=false
  constructor(private userservice:UserService,private spinner: NgxSpinnerService) { }
equipmentlistArray=[];
  ngOnInit() {

    if(this.role==='Admin'){
      this.access=true;
    }
    else{
      this.access=false;
    }
    this.announcemetList();
    this.equipmentList();

  }

  equipmentList(){
    this.spinner.show();

    this.userservice.equipmentloanlist().subscribe((res:any)=>{

      let dateNow=new Date();
      res.response.forEach(expire=>{
        this.equipmentlistArray.push({
          equipmentName:expire.equipmentName,
          expireAlert:false,
          leasePeriod:expire.leasePeriod,
          serialNo:expire.serialNo
        })
      })
      console.log("array",this.equipmentlistArray)
      this.equipmentlistArray.forEach(loanexpire=>{

        console.log(moment(dateNow).format('YYYY-MM-DD HH:mm'),moment(loanexpire.leasePeriod).format('YYYY-MM-DD HH:mm'));
        if(moment(dateNow).format('YYYY-MM-DD hh:mm')>moment(loanexpire.leasePeriod).format('YYYY-MM-DD hh:mm')){
          loanexpire.expireAlert=true;
          this.noalert=true;
        }
      })
    })
  }
  announcemetList(){
    this.spinner.show();
this.userservice.announcementList().subscribe(
  (res:any)=>{
console.log(res);

this.announcement=res.response;
this.spinner.hide();
  }
)
  }

}
