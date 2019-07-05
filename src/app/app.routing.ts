import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Import Component

import { LoginComponent } from '../app/login/login.component';
import { SignupComponent } from '../app/signup/signup.component';
import { AddnewcameraComponent } from './addnewcamera/addnewcamera.component';
import { AddnewequipmentComponent } from './addnewequipment/addnewequipment.component';
import { CameralistComponent } from './cameralist/cameralist.component';
import { CameraloanComponent } from './cameraloan/cameraloan.component';
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







export const routes: Routes = [
 
 
  
  {
    path: '',
    component: LoginComponent,
    data: {
      title: 'Login'
    }
  },
  {
    path: 'signup',
    component: SignupComponent,
    data: {
      title: 'Sign Up'
    }
  },

 {
     path:'addnewcamera',
     component:AddnewcameraComponent,
     data: {
        title: 'Add Camera'
      }
 },

 {
    path:'addnewequipment',
    component:AddnewequipmentComponent,
    data: {
       title: 'Add Equipment'
     }
},
{
    path:'cameralist',
    component:CameralistComponent,
    data: {
       title: 'Camera list'
     }
},
{
    path:'cameraloan',
    component:CameraloanComponent,
    data: {
       title: 'Camera loan'
     }
},

{
  path:'changepassword',
  component:ChangepasswordComponent,
  data: {
     title: 'Change Password'
   }
},
{
  path:'createnewstaff',
  component:CreatenewstaffaccountComponent,
  data: {
     title: 'Create Staff Account'
   }
},
{
  path:'editaccessright',
  component:EditaccessrightComponent,
  data: {
     title: 'Edit Access Right'
   }
},
{
  path:'editcameradetail',
  component:EditcameradetailComponent,
  data: {
     title: 'Edit Camera Detail'
   }
},
{
  path:'editcameraloan',
  component:EditcameraloanComponent,
  data: {
     title: 'Edit Camera Loan'
   }
},
{
  path:'editprofile',
  component:EditprofileComponent,
  data: {
     title: 'Edit Profile'
   }
},
{
  path:'home',
  component:HomeComponent,
  data: {
     title: 'home'
   }
},
{
  path:'post',
  component:PostComponent,
  data: {
     title: 'Post'
   }
},
{
  path:'profile',
  component:ProfileComponent,
  data: {
     title: 'Profile'
   }
},
{
  path:'staffdetail',
  component:StaffdetailComponent,
  data: {
     title: 'Staff Detail'
   }
},

{
  path:'stafflist',
  component:StafflistComponent,
  data: {
     title: 'Staff List'
   }
},









 
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
