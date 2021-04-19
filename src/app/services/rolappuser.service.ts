import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AppResponse, EntidadUser, RolResponse, UserResponse } from '../models/rol-app';

@Injectable({
  providedIn: 'root'
})
export class RolappuserService {


  private url = 'http://localhost:8092/api';
  private rt = '/log';


  constructor(private http: HttpClient) { }

  getRoles(){
	  return this.http.get<RolResponse >(`${ this.url }/rolapp/rol`);
  }
  
  getAplicaiones(){
	  return this.http.get<AppResponse>(`${ this.url }/rolapp/appl`);
  }
  
  getUsuarios(){
	  return this.http.get<UserResponse>(`${ this.url }/usuario`);
  }
  
  addUsuarios(user : EntidadUser){
	  return this.http.post(`${ this.url }/usuario/add`,user)
  }



}
