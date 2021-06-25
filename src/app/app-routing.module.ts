import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//Website Routes
import {ResumeComponent} from '../app/components/resume/resume.component';
import {HomeComponent} from '../app/components/home/home.component';


const routes: Routes = [
  { 
  path: '',
   redirectTo: 'home',
   pathMatch: 'full'
   },
  {
    path:'home',
    component: HomeComponent
  },

  {
    path:'resume',
    component: ResumeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
