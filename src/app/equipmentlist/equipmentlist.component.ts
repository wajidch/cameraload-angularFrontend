import { Component, OnInit } from '@angular/core';
import { UserService } from '../common/user.service';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-equipmentlist',
  templateUrl: './equipmentlist.component.html',
  styleUrls: ['./equipmentlist.component.css']
})
export class EquipmentlistComponent implements OnInit {
equipmentlistItem=[];
  constructor(private userservice:UserService,private spinner:NgxSpinnerService) { }

  ngOnInit() {
    this.Equipmentlist()
  }
  
Equipmentlist(){
  this.spinner.show();
this.userservice.equipmentloanlist().subscribe((res:any)=>{

  
  res.response.forEach(equip => {
    console.log(equip.model,equip.equipmentType,equip.brand)
    if(equip.model!=null && equip.equipmentType!=null && equip.brand!=null){
    this.equipmentlistItem.push({
      model:equip.model,
      equipmentType:equip.equipmentType,
      brand:equip.brand
    })
  }

  });
  console.log(this.equipmentlistItem)
  this.spinner.hide();
})
}
}
