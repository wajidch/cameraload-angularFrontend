import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { AppRoutingModule } from './app.routing';
import { AddequipmentComponent } from './addequipment/addequipment.component';
import { AddnewequipmentComponent } from './addnewequipment/addnewequipment.component';
import { EquipmentlistComponent } from './equipmentlist/equipmentlist.component';
import { EquipmentloanComponent } from './equipmentloan/equipmentloan.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ChangepasswordComponent } from './changepassword/changepassword.component';
import { CreatenewstaffaccountComponent } from './createnewstaffaccount/createnewstaffaccount.component';
import { EditaccessrightComponent } from './editaccessright/editaccessright.component';
import { EditequipmentdetailComponent } from './editequipmentdetail/editequipmentdetail.component';
import { EditequipmentloanComponent } from './editequipmentloan/editequipmentloan.component';
import { EditprofileComponent } from './editprofile/editprofile.component';
import { HomeComponent } from './home/home.component';
import { PostComponent } from './post/post.component';
import { ProfileComponent } from './profile/profile.component';
import { StaffdetailComponent } from './staffdetail/staffdetail.component';
import { StafflistComponent } from './stafflist/stafflist.component';
import { UserService } from './common/user.service';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgxSpinnerModule } from "ngx-spinner";

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    AddequipmentComponent,
    AddnewequipmentComponent,
    EquipmentlistComponent,
    EquipmentloanComponent,
    HeaderComponent,
    FooterComponent,
    ChangepasswordComponent,
    CreatenewstaffaccountComponent,
    EditaccessrightComponent,
    EditequipmentdetailComponent,
    EditequipmentloanComponent,
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
    FormsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgxSpinnerModule

  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
