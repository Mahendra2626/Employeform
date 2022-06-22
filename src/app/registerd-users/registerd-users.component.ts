import { Component, OnInit } from '@angular/core';
import { UserServiceService } from '../user-service.service';
import User from '../Entity/User';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-registerd-users',
  templateUrl: './registerd-users.component.html',
  styleUrls: ['./registerd-users.component.css']
})
export class RegisterdUsersComponent implements OnInit {

  user:User=new User();
  users:User[]=[];


  constructor(public userService:UserServiceService) { }

  ngOnInit(): void {
    const promise=this.userService.getUsers();
    promise.subscribe((response)=>{
      this.users=response as User[];
    })


  }

}
