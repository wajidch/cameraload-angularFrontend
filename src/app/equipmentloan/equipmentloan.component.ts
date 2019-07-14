import { Component, OnInit } from '@angular/core';
import { UserService } from '../common/user.service';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-equipmentloan',
  templateUrl: './equipmentloan.component.html',
  styleUrls: ['./equipmentloan.component.css']
})
export class EquipmentloanComponent implements OnInit {
  equipmentloanlist=[];
  constructor(private userservice:UserService,private spinner: NgxSpinnerService) { }

  ngOnInit() {
    this.equipmentloanlistFn()
  }

  equipmentloanlistFn(){
    this.spinner.show();
    this.userservice.equipmentloanlist().subscribe(
      (req:any)=>{
      req.response.forEach(list =>{
        if(list.serialNo!=null && list.equipmentName!=null && list.device1!=null && list.accessories1!=null){
        this.equipmentloanlist.push({
          serialNo:list.serialNo,
          equipmentName:list.equipmentName,
          device1:list.device1,
          accessories1:list.accessories1
        })
      }
      })
    
        this.spinner.hide();
      }
    )

  }
}
