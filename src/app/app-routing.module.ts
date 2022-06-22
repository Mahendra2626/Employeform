import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { RegisterdUsersComponent } from './registerd-users/registerd-users.component';
import { ThankyouComponent } from './thankyou/thankyou.component';
import { UserRegisrationFormComponent } from './user-regisration-form/user-regisration-form.component';

const routes: Routes = [
  {path:'home',component:AppComponent},
  {path:'registrationform',component:UserRegisrationFormComponent},
  {path:'registerdusers',component:RegisterdUsersComponent},
  {path:'thankyou',component:ThankyouComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
