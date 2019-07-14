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
  addnewaccount(val){
    return this._http.post(environment.baseUrl + 'staff/createnewaccount',val)

  }
  updateprofile(val){
    return this._http.put(environment.baseUrl + 'staff/updateProfile',val)

  }
  announcementList(){

    return this._http.get(environment.baseUrl+"announcements/announcementList",{

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