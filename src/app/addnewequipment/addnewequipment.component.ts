import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UserService } from '../common/user.service';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-addnewequipment',
  templateUrl: './addnewequipment.component.html',
  styleUrls: ['./addnewequipment.component.css']
})
export class AddnewequipmentComponent implements OnInit {
  newEquipmentForm:FormGroup
addnewequipmentMsg:string;
  constructor(private userservice:UserService,private spinner:NgxSpinnerService) { }

  ngOnInit() {
    this.newEquipmentForm = new FormGroup({
      model: new FormControl('',[Validators.required]),
      leaseStatus: new FormControl('',[Validators.required]),

      equipmentType: new FormControl('',[Validators.required]),

      leasePeriod: new FormControl('',[Validators.required]),
      brand: new FormControl('',[Validators.required]),

      insuranceHistory: new FormControl('',[Validators.required]),

      lifespan: new FormControl('',[Validators.required]),

      

   
    });
  }
  addEquipmentList(val){
    this.spinner.show();
this.userservice.addEquipment(val).subscribe(res =>{
  console.log(res)
  this.addnewequipmentMsg='New Equipment added';
  this.spinner.hide();
})
  }
}
