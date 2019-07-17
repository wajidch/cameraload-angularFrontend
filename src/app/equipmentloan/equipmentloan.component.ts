import { Component, OnInit } from '@angular/core';
import { UserService } from '../common/user.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { Router } from '@angular/router';
import { Angular5Csv } from 'angular5-csv/dist/Angular5-csv';
import { environment } from '../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-equipmentloan',
  templateUrl: './equipmentloan.component.html',
  styleUrls: ['./equipmentloan.component.css']
})
export class EquipmentloanComponent implements OnInit {
  equipmentloanlist=[];
  csvRecords=[]
  csvFile: any;
  dataImported: string;
  constructor(private userservice:UserService,private spinner: NgxSpinnerService,private route:Router,private _http: HttpClient) { }

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
      headers: ["Equipment_Id","Loan_Serial_No", "Equipment_Name", "Device1",'Accessories1'],
      nullToEmptyString: true,
    };
  new Angular5Csv(this.equipmentloanlist, 'Equipment Loan Report',options);
  this.spinner.hide();
  }
  upload(event){
    this.spinner.show();
    if (event && event.target.files.length > 0) {
      const headers = new HttpHeaders();
      headers.append('Content-Type', 'multipart/*');
      const file = event.target.files[0];
      console.log(file);
      console.log('filesize', file.size / 1000000);
      const filesize = file.size / 1000000;
      const type = file.type;
   
        const formData = new FormData();
        formData.append('file', file, file.name);
        const reader = new FileReader();
        reader.onload = (value: any) => {
          //this.imgURL = value.target.result;
        }
        reader.readAsDataURL(event.target.files[0]);
        this._http.post(environment.baseUrl + 'upload', formData,
          { headers: headers }).subscribe(
            (res: any) => {
                console.log("res", res)
                this.csvFile = res.fileName
               

                this.userservice.uploadloanCSV(this.csvFile).subscribe((res:any)=>{
                  console.log(res)
                  location.reload();

this.spinner.hide();

                })
              }
            
          );



      
    }
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
