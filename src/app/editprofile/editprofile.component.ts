import { Component, OnInit } from '@angular/core';
import { UserService } from '../common/user.service';
import { NgxSpinnerService } from 'ngx-spinner';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';


@Component({
  selector: 'app-editprofile',
  templateUrl: './editprofile.component.html',
  styleUrls: ['./editprofile.component.css']
})
export class EditprofileComponent implements OnInit {
  profileForm: FormGroup;
user_id=localStorage.getItem('user_id');
staffid=localStorage.getItem('staff_id');
first_name=localStorage.getItem('first_name');
department=localStorage.getItem('department');
mobileNo=localStorage.getItem('mobileNo');
email=localStorage.getItem('email');
job_title=localStorage.getItem('job_title')
  userImage: any;
  imgURL: any;
  imgSelected: boolean;
  imginprocess: boolean;
  filesizeerror: boolean;
  message: string;
  profileUpdatedMsg: any;
  constructor(private userService:UserService,private spinner: NgxSpinnerService,private _http: HttpClient) { }

  ngOnInit() {
    this.profileForm = new FormGroup({
      first_name: new FormControl(this.first_name,[Validators.required]),
      staff_id: new FormControl(this.staffid,[Validators.required]),
      department: new FormControl(this.department,[Validators.required]),

      email: new FormControl(this.email,[Validators.required]),

      mobile_no: new FormControl(this.mobileNo,[Validators.required]),


   
    });
  }
  uploadImg(event: any) {
    if (event && event.target.files.length > 0) {
      const headers = new HttpHeaders();
      headers.append('Content-Type', 'multipart/*');
      const file = event.target.files[0];
      console.log(file);
      console.log('filesize', file.size / 1000000);
      const filesize = file.size / 1000000;
      const type = file.type;
      if (filesize <= 5 && (type === 'image/jpeg' || type === 'image/png')) {
        this.message = ''
        this.filesizeerror = false;
        this.imgSelected = true;
        this.imginprocess = true;
        console.log('true');
        const formData = new FormData();
        formData.append('file', file, file.name);
        const reader = new FileReader();
        this.imgSelected = true;
        reader.onload = (value: any) => {
          this.imgURL = value.target.result;
        }
        reader.readAsDataURL(event.target.files[0]);
        this._http.post(environment.baseUrl + 'upload', formData,
          { headers: headers }).subscribe(
            (res: any) => {
                console.log("res", res)
                this.userImage = res.fileName
                //this.spinner.hide()
                // document.getElementById('close').click();
                //this.citiesList();
                console.log(res)
              }
            
          );



      } 
    }

  }
  editProfile(val){
    this.spinner.show();
    let profileobj={
      user_id:this.user_id,
      first_name:val.first_name,
      staff_id:val.staff_id,
      department:val.department,
      email:val.email,
      mobile_no:val.mobile_no,
      profile_picture:this.userImage
    }
    
    localStorage.setItem('first_name',val.first_name);
    localStorage.setItem('email',val.email);
    localStorage.setItem('mobileNo',val.mobile_no);
    localStorage.setItem('department',val.department);
    localStorage.setItem('staff_id',val.staff_id);
    localStorage.setItem('profile_picture',this.userImage)
    this.userService.updateprofile(profileobj).subscribe((res:any)=>{
      console.log(res);
      this.profileUpdatedMsg='Profile updated';
      this.spinner.hide();
    })
  }
}
