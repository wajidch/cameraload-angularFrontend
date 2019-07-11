import { Component, OnInit } from '@angular/core';
import { UserService } from '../common/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
role=localStorage.getItem('role')
access:boolean;
announcement;
  constructor(private userservice:UserService) { }

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
this.userservice.announcementList().subscribe(
  res=>{
console.log(res);

this.announcement=res;
  }
)
  }

}
