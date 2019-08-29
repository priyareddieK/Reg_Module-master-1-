import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MyMaterialModule } from './material.module';
// import {FlexLayoutModule} from '@angular/flex-layout';
import { AppComponent } from './app.component';
import { RegComponent } from './reg/reg.component';
import { RouterModule } from '@angular/router';
import { FlexLayoutModule } from "@angular/flex-layout";
import { Login2Component } from './login2/login2.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    RegComponent,
    Login2Component,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {path : 'reg', component : RegComponent},
      {path : 'login2', component : Login2Component}
    ]),
    BrowserAnimationsModule,
    MyMaterialModule,
    MatSidenavModule,
    FlexLayoutModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
