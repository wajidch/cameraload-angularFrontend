import { Injectable, OnInit } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable()
export class UserService implements OnInit {

  constructor(private _http: HttpClient) {
  }

  ngOnInit() {
  }

  login(email: string, password: string) {
    const headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    headers.append("Access-Control-Allow-Origin", "*")

    return this._http.post(environment.baseUrl + 'staff/login',
      {
        email: email,
        password: password,

      }, { headers: headers })

  }
  postAnnouncemnet(val){
    return this._http.post(environment.baseUrl + 'announcements/postAnnouncement',val)
  }
  addEquipment(val){
    return this._http.post(environment.baseUrl + 'Equipment/addEquipment',val)

  }
  uploadloanCSV(csvdata){
    let csvobj={
      fileName:csvdata
    }
    return this._http.post(environment.baseUrl + 'upload/uploadLoanCSV',csvobj)

  }
  uploadlistCSV(csvdata){
    let csvobj={
      fileName:csvdata
    }
    return this._http.post(environment.baseUrl + 'upload/uploadListCSV',csvobj)

  }
  addnewaccount(val){
    return this._http.post(environment.baseUrl + 'staff/createnewaccount',val)

  }
  editaccessRight(val){
    return this._http.put(environment.baseUrl + 'staff/editaccessright',val)

  }
  updateprofile(val){
    return this._http.put(environment.baseUrl + 'staff/updateProfile',val)

  }
  deleteEquipment(id){
let deleteobj={
  equipment_id:id
}
    return this._http.put(environment.baseUrl + 'Equipment/deleteEquipment',deleteobj)

  }

  changePassword(obj){
  
    return this._http.put(environment.baseUrl + 'staff/changePassword',obj)

  }
  updateEquipment(val){
    return this._http.put(environment.baseUrl + 'Equipment/updateEquipment',val)

  }
  announcementList(){

    return this._http.get(environment.baseUrl+"announcements/announcementList",{

    })
  }

  equipmentDetailList(obj){

    return this._http.get(environment.baseUrl+"Equipment/equipmentlistdetail?equipment_id="+obj.equipment_id,{

    })
  }
  accessright(id){
    return this._http.get(environment.baseUrl+"staff/accessrightlist?id="+id,{

    })
  }
  stafflist(){
    return this._http.get(environment.baseUrl+"staff/stafflist",{

    })
  }
  equipmentloanlist(){
    return this._http.get(environment.baseUrl+"Equipment/equipmentlist",{

    })
  }
}