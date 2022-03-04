import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../models/User';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user: User = {
    password: "",
    email: ""
  }

  constructor(private http: HttpClient) { }

  public seConnecter(username: User){
    localStorage.setItem('ACCES_TOKEN',"acces_token");
    this.user.email = username.email;
  }

  public estConnecte(){
    return localStorage.getItem('ACCES_TOKEN') !== null;
  }

  public seDeconnecter(){
    localStorage.removeItem('ACCES_TOKEN')
  }

  public getUser(){
    return this.user.email;
  }

}
