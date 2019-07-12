import { Component, OnInit } from '@angular/core';
import { UserService } from '../common/user.service';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-equipmentloan',
  templateUrl: './equipmentloan.component.html',
  styleUrls: ['./equipmentloan.component.css']
})
export class EquipmentloanComponent implements OnInit {
  equipmentloanlist;
  constructor(private userservice:UserService,private spinner: NgxSpinnerService) { }

  ngOnInit() {
    this.equipmentloanlistFn()
  }

  equipmentloanlistFn(){
    this.spinner.show();
    this.userservice.equipmentloanlist().subscribe(
      req=>{
        console.log("response",req);
        this.equipmentloanlist=req;
        this.spinner.hide();
      }
    )

  }
}
