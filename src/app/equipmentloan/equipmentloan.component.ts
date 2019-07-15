import { Component, OnInit } from '@angular/core';
import { UserService } from '../common/user.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { Router } from '@angular/router';
import { Angular5Csv } from 'angular5-csv/dist/Angular5-csv';
 
@Component({
  selector: 'app-equipmentloan',
  templateUrl: './equipmentloan.component.html',
  styleUrls: ['./equipmentloan.component.css']
})
export class EquipmentloanComponent implements OnInit {
  equipmentloanlist=[];
  constructor(private userservice:UserService,private spinner: NgxSpinnerService,private route:Router) { }

  ngOnInit() {
    
    this.equipmentloanlistFn();
  }
  generateReport(){
    this.spinner.show();
    var options = { 
      fieldSeparator: ',',
      quoteStrings: '"',
      decimalseparator: '.',
      useBom: true,
      noDownload: false,
      headers: ["Equipment Id","Loan Serial No", "Equipment Name", "Device1",'Accessories1'],
      nullToEmptyString: true,
    };
  new Angular5Csv(this.equipmentloanlist, 'Equipment Loan Report',options);
  this.spinner.hide();
  }
  equipmentloanlistFn(){
    this.spinner.show();
    this.userservice.equipmentloanlist().subscribe(
      (req:any)=>{

      req.response.forEach(list =>{
        if(list.serialNo!=null && list.equipmentName!=null && list.device1!=null && list.accessories1!=null){
        this.equipmentloanlist.push({
          id:list.id,
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
  edit(id){

    localStorage.setItem('equipmentId',id);
this.route.navigateByUrl('editequipmentloan');
  }

  delete(id){
    this.spinner.show();
    console.log("delete",id);
  
    this.userservice.deleteEquipment(id).subscribe((res:any)=>{
  
      this.equipmentloanlist=[];
  
      console.log(res);
      this.equipmentloanlistFn()
      this.spinner.hide();
    })
  }
}
