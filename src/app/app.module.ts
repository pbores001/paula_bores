import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ResumeComponent } from './components/resume/resume.component';
import { HomeComponent } from './components/home/home.component';
import { HeaderComponent } from './shared/header/header.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { WorkComponent } from './components/home/work/work.component';




// ANGULAR MATERIAL
import { MatButtonModule } from '@angular/material/button';
import { MyContactComponent } from './components/my-contact/my-contact.component';


// SERVICES




@NgModule({
  declarations: [
    AppComponent,
    ResumeComponent,
    HomeComponent,
    HeaderComponent,
    WorkComponent,
    MyContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
