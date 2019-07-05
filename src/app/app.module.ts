import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { AppRoutingModule } from './app.routing';
import { AddnewcameraComponent } from './addnewcamera/addnewcamera.component';
import { AddnewequipmentComponent } from './addnewequipment/addnewequipment.component';
import { CameralistComponent } from './cameralist/cameralist.component';
import { CameraloanComponent } from './cameraloan/cameraloan.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ChangepasswordComponent } from './changepassword/changepassword.component';
import { CreatenewstaffaccountComponent } from './createnewstaffaccount/createnewstaffaccount.component';
import { EditaccessrightComponent } from './editaccessright/editaccessright.component';
import { EditcameradetailComponent } from './editcameradetail/editcameradetail.component';
import { EditcameraloanComponent } from './editcameraloan/editcameraloan.component';
import { EditprofileComponent } from './editprofile/editprofile.component';
import { HomeComponent } from './home/home.component';
import { PostComponent } from './post/post.component';
import { ProfileComponent } from './profile/profile.component';
import { StaffdetailComponent } from './staffdetail/staffdetail.component';
import { StafflistComponent } from './stafflist/stafflist.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    AddnewcameraComponent,
    AddnewequipmentComponent,
    CameralistComponent,
    CameraloanComponent,
    HeaderComponent,
    FooterComponent,
    ChangepasswordComponent,
    CreatenewstaffaccountComponent,
    EditaccessrightComponent,
    EditcameradetailComponent,
    EditcameraloanComponent,
    EditprofileComponent,
    HomeComponent,
    PostComponent,
    ProfileComponent,
    StaffdetailComponent,
    StafflistComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
