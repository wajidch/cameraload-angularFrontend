import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UserService } from '../common/user.service';
import { NgxSpinnerService } from 'ngx-spinner';
import * as moment from 'moment';


@Component({
  selector: 'app-editequipmentloan',
  templateUrl: './editequipmentloan.component.html',
  styleUrls: ['./editequipmentloan.component.css']
})
export class EditequipmentloanComponent implements OnInit {
  equipmentDetailForm:FormGroup;
  updateequipmentMsg:string;
  equipment_id=localStorage.getItem('equipmentId');

  constructor(private userservice:UserService,private spinner:NgxSpinnerService) { }

  ngOnInit() {

    this.equipmentDetailForm = new FormGroup({
      serialNo: new FormControl('',[Validators.required]),
      accessories1: new FormControl('',[Validators.required]),
      equipmentName: new FormControl('',[Validators.required]),

      device1: new FormControl('',[Validators.required]),

      leasePeriod:new FormControl('',[Validators.required]),

      

   
    });
    this.equipmentDetailList();
  }

  equipmentDetailList(){


    let equipmentDetailObj={
      equipment_id:this.equipment_id
    }
    console.log("d",this.equipment_id)
    this.spinner.show();
    this.userservice.equipmentDetailList(equipmentDetailObj).subscribe((res:any)=>{
      this.equipmentDetailForm = new FormGroup({
        serialNo: new FormControl(res.response.serialNo,[Validators.required]),
        accessories1: new FormControl(res.response.accessories1,[Validators.required]),
        equipmentName: new FormControl(res.response.equipmentName,[Validators.required]),
  
        device1: new FormControl(res.response.device1,[Validators.required]),
  
        leasePeriod:new FormControl(moment(res.response.leasePeriod).format('YYYY-MM-DD'),[Validators.required]),
  
        
  
     
      });
      console.log(res);
      this.spinner.hide();

    })

  }

  updateEquipment(val){
    this.spinner.show();
    let equipObj={
      equipment_id:this.equipment_id,
      serialNo:val.serialNo,
      accessories1:val.accessories1,
      equipmentName:val.equipmentName,
      device1:val.device1,
      leasePeriod:val.leasePeriod
    }

    this.userservice.updateEquipment(equipObj).subscribe((res:any)=>{

      console.log(res);

      this.updateequipmentMsg='Equipment loan Updated';
      this.spinner.hide();
    })

  }

}
