import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Import Component

import { LoginComponent } from '../app/login/login.component';
import { SignupComponent } from '../app/signup/signup.component';
import { AddequipmentComponent } from './addequipment/addequipment.component';
import { AddnewequipmentComponent } from './addnewequipment/addnewequipment.component';
import { EquipmentlistComponent } from './equipmentlist/equipmentlist.component';
import { EquipmentloanComponent } from './equipmentloan/equipmentloan.component';
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
     path:'addequipment',
     component:AddequipmentComponent,
     data: {
        title: 'Add Equipment'
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
    path:'equipmentlist',
    component:EquipmentlistComponent,
    data: {
       title: 'Equipment list'
     }
},
{
    path:'equipmentloan',
    component:EquipmentloanComponent,
    data: {
       title: 'Equipment loan'
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
  path:'editequipmentlistdetail',
  component:EditequipmentdetailComponent,
  data: {
     title: 'Edit Camera Detail'
   }
},
{
  path:'editequipmentloan',
  component:EditequipmentloanComponent,
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
