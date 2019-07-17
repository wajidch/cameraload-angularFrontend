import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UserService } from '../common/user.service';
import { NgxSpinnerService } from 'ngx-spinner';
import * as moment from 'moment';

@Component({
  selector: 'app-editequipmentdetail',
  templateUrl: './editequipmentdetail.component.html',
  styleUrls: ['./editequipmentdetail.component.css']
})
export class EditequipmentdetailComponent implements OnInit {
  equipmentListForm:FormGroup;
  equipment_id=localStorage.getItem('equipmentlistId');
  equipmentUpdatedMsg:string;
  constructor(private userservice:UserService,private spinner:NgxSpinnerService) { }

  ngOnInit() {
    
    this.equipmentListForm = new FormGroup({
      model: new FormControl('',[Validators.required]),
      equipmentType: new FormControl('',[Validators.required]),
      leaseStatus: new FormControl('',[Validators.required]),

      brand: new FormControl('',[Validators.required]),

      insuranceHistory:new FormControl('',[Validators.required]),
      lifespan:new FormControl('',[Validators.required]),

      

   
    });
    this.equipmentlistdetail();

  }

  equipmentlistdetail(){

    this.spinner.show();

    let equipmentDetailObj={
      equipment_id:this.equipment_id
    }
    console.log("d",this.equipment_id)
    this.spinner.show();
    this.userservice.equipmentDetailList(equipmentDetailObj).subscribe((res:any)=>{


      this.equipmentListForm = new FormGroup({
        model: new FormControl(res.response.model,[Validators.required]),
        equipmentType: new FormControl(res.response.equipmentType,[Validators.required]),
        leaseStatus: new FormControl(res.response.leaseStatus,[Validators.required]),
  
        brand: new FormControl(res.response.brand,[Validators.required]),
  
        insuranceHistory:new FormControl(res.response.insuranceHistory,[Validators.required]),
        lifespan:new FormControl(res.response.lifespan,[Validators.required]),
  
        
  
     
      });
      this.spinner.hide();
    })


  }
  updateEquipmentList(val){
this.spinner.show();

let equipObj={
  equipment_id:this.equipment_id,
  model:val.model,
  equipmentType:val.equipmentType,
  leaseStatus:val.leaseStatus,
  brand:val.brand,
  insuranceHistory:val.insuranceHistory,
  lifespan:val.lifespan
}
    this.userservice.updateEquipment(equipObj).subscribe((res:any)=>{

console.log(res)
this.equipmentUpdatedMsg='Equipment updated';
this.spinner.hide();
    })

  }

}
