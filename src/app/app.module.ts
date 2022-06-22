import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserNavBarComponent } from './user-nav-bar/user-nav-bar.component';
import { UserRegisrationFormComponent } from './user-regisration-form/user-regisration-form.component';
import { RegisterdUsersComponent } from './registerd-users/registerd-users.component';
import { ThankyouComponent } from './thankyou/thankyou.component';

@NgModule({
  declarations: [
    AppComponent,
    UserNavBarComponent,
    UserRegisrationFormComponent,
    RegisterdUsersComponent,
    ThankyouComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
