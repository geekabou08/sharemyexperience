import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

//Components
import { AppComponent } from './app.component';
import { HomeComponent } from './Components/home/home.component';

//Services
import {HomeService} from './Services/home.service';


const appRoutes: Routes = [
  { path: 'home', component: HomeComponent },
 
  ];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
    ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [HomeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
