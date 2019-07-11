import { Component, OnInit } from '@angular/core';
import { UserService } from '../common/user.service';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
role=localStorage.getItem('role')
access:boolean;
announcement;
  constructor(private userservice:UserService,private spinner: NgxSpinnerService) { }

  ngOnInit() {

    if(this.role==='Admin'){
      this.access=true;
    }
    else{
      this.access=false;
    }
    this.announcemetList();

  }
  announcemetList(){
    this.spinner.show();
this.userservice.announcementList().subscribe(
  res=>{
console.log(res);

this.announcement=res;
this.spinner.hide();
  }
)
  }

}
