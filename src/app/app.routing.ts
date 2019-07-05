import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Import Component

import { LoginComponent } from '../app/login/login.component';
import { SignupComponent } from '../app/signup/signup.component';
import { AddnewcameraComponent } from './addnewcamera/addnewcamera.component';
import { AddnewequipmentComponent } from './addnewequipment/addnewequipment.component';
import { CameralistComponent } from './cameralist/cameralist.component';
import { CameraloanComponent } from './cameraloan/cameraloan.component';







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



 
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
