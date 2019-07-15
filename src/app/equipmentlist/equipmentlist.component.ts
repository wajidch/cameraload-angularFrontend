import { Component, OnInit } from '@angular/core';
import { UserService } from '../common/user.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { Router } from '@angular/router';
import { Angular5Csv } from 'angular5-csv/dist/Angular5-csv';

@Component({
  selector: 'app-equipmentlist',
  templateUrl: './equipmentlist.component.html',
  styleUrls: ['./equipmentlist.component.css']
})
export class EquipmentlistComponent implements OnInit {
equipmentlistItem=[];
  constructor(private userservice:UserService,private spinner:NgxSpinnerService,private route:Router) { }

  ngOnInit() {
    this.Equipmentlist()
  }
  
  generateReport(){
    this.spinner.show();
    var options = { 
      fieldSeparator: ',',
      quoteStrings: '"',
      decimalseparator: '.',
      useBom: true,
      noDownload: false,
      headers: ["Equipment Id","Model No", "Equipment Type", "Brans"],
      nullToEmptyString: true,
    };
  new Angular5Csv(this.equipmentlistItem, 'Equipment List Report',options);
  this.spinner.hide();
  }
Equipmentlist(){
  this.spinner.show();
this.userservice.equipmentloanlist().subscribe((res:any)=>{

  
  res.response.forEach(equip => {
    console.log(equip.model,equip.equipmentType,equip.brand)
    if(equip.model!=null && equip.equipmentType!=null && equip.brand!=null){
    this.equipmentlistItem.push({
      id:equip.id,
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

edit(id){
  console.log(id);
  localStorage.setItem("equipmentlistId",id)
  this.route.navigateByUrl('editequipmentlistdetail');

}
delete(id){
  this.spinner.show();
  console.log("delete",id);

  this.userservice.deleteEquipment(id).subscribe((res:any)=>{

    this.equipmentlistItem=[];

    console.log(res);
    this.Equipmentlist()
    this.spinner.hide();
  })
}
}
