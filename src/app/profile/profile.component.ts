import { Component, OnInit } from '@angular/core';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
staffid=localStorage.getItem('staff_id');
first_name=localStorage.getItem('first_name');
department=localStorage.getItem('department');
mobileNo=localStorage.getItem('mobileNo');
email=localStorage.getItem('email');
job_title=localStorage.getItem('job_title');
profile_picture=localStorage.getItem('profile_picture');
imagePath=environment.ImagePath;
constructor() { }

  ngOnInit() {

  }

}
