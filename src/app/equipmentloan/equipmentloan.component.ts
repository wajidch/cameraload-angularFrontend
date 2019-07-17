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
  csvRecords=[]
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
      headers: ["Equipment_Id","Loan_Serial_No", "Equipment_Name", "Device1",'Accessories1'],
      nullToEmptyString: true,
    };
  new Angular5Csv(this.equipmentloanlist, 'Equipment Loan Report',options);
  this.spinner.hide();
  }
  upload(files: FileList){
    let CSVData:any = []
    if (files && files.length > 0) {
      const file: File = files[0];
      const filesize = file.size / 1000000;
      if (filesize <= 10) {
        console.log(file);
       
        const formData = new FormData();
        formData.append('uploadCSV', file, file.name);
        const reader: FileReader = new FileReader();
        reader.readAsText(file);

        reader.onload = (e) => {
          const csva: any = reader.result;
          console.log("Ssd",csva)
          const lines = csva.split('\n');
          const headers = lines[0].split(',');
          for (let i = 1 ; i < lines.length; i++) {
            const obj = {
             
            };
            const currentline = lines[i].split(',');
            for (let j = 0 ; j < headers.length; j++) {
              console.log(obj[headers[j]])
              obj[headers[j]] = currentline[j];

            }

          
          CSVData.push(obj)
            console.log(CSVData)
 
            this.userservice.uploadCSV(CSVData).subscribe((res:any)=>{

              console.log(res)
            })

            }
      
            
            
            };
        } 

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
