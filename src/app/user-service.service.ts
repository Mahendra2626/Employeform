import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import User from './Entity/User';
import { Router } from '@angular/router';

const url = "http://localhost:3000/users";
@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  //get registared users
  getUsers() {
    return this.http.get(url);
  }

  createUser(user: {
    firstName: string;
    lastName: string;
    address: String;
    city: String;
    state: String;
    zipCode: number;
    country: String;
    countryCode: number;
    areaCode: number;
    phoneNumber: number;
    email: String;
    dob: Date;
    gender: String;
    startingDate: String;
    comments: String;

  }) {
    return this.http.post(url, user);
  }

 




  constructor(public http: HttpClient, private router: Router) { }
}
