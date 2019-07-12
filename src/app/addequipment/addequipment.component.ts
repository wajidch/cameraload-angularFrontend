import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UserService } from '../common/user.service';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-addequipment',
  templateUrl: './addequipment.component.html',
  styleUrls: ['./addequipment.component.css']
})
export class AddequipmentComponent implements OnInit {
  addequipmentForm:FormGroup
addequipmentmsg;
  constructor(private userservice:UserService,private spinner:NgxSpinnerService) { }

  ngOnInit() {

    this.addequipmentForm = new FormGroup({
      serialNo: new FormControl('',[Validators.required]),
      accessories1: new FormControl('',[Validators.required]),
      equipmentName: new FormControl('',[Validators.required]),

      accessories2: new FormControl('',[Validators.required]),

      accessories3: new FormControl('',[Validators.required]),
      device1: new FormControl('',[Validators.required]),

      device2: new FormControl('',[Validators.required]),

      device3: new FormControl('',[Validators.required]),
      leasePeriod:new FormControl('',[Validators.required]),

      

   
    });
  }
  AddEquipment(val){
    this.spinner.show();
this.userservice.addEquipment(val).subscribe(req=>{

this.addequipmentmsg='Equipment added';
this.spinner.hide();
})
  }
}
