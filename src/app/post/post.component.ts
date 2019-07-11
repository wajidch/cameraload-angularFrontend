import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UserService } from '../common/user.service';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  announcementForm:FormGroup
  constructor(private username:UserService,private spinner: NgxSpinnerService) { }

  announcementMsg=''
  ngOnInit() {
    this.announcementForm = new FormGroup({
      subject: new FormControl('',[Validators.required]),
      message: new FormControl('',[Validators.required]),
   
    });
  }

  postAnnouncement(val){
this.spinner.show();
  let announcementObj={
    subject:val.subject,
    message:val.message,
    date:Date.now()
  }
    this.username.postAnnouncemnet(announcementObj).subscribe(res =>{
      console.log(res)
      this.spinner.hide();
this.announcementMsg='Announcement added';
    })
  }

}
