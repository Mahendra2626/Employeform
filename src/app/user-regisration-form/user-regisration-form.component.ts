import { Component, OnInit } from '@angular/core';
import { UserServiceService } from '../user-service.service';
import User from '../Entity/User';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-user-regisration-form',
  templateUrl: './user-regisration-form.component.html',
  styleUrls: ['./user-regisration-form.component.css']
})
export class UserRegisrationFormComponent implements OnInit {

  title="RegistrationForm";
   user:User=new User();
   users:User[]=[];


   save(){
     const observable=this.userService.createUser(this.user);
     observable.subscribe((response: any)=>{
       console.log(response);
       confirm("Are you want to Submit");
       alert("User registerd Succefully");
     },
     function(error){
       console.log(error);
       alert("somthing is wrong");
     }
     );
   }
   clear(form:NgForm){
     form.resetForm();
   }


   thankyou() {
    this.router.navigate(['/thankyou']);
  }
  constructor(public userService:UserServiceService,public router:Router) { }

  ngOnInit(): void {

    const promise=this.userService.getUsers();
    promise.subscribe((response)=>{
      console.log(response);
      this.users=response as User[];
    })

  }

}
