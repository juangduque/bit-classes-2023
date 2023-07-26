import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from '../views/home/home.component';
import { LoginComponent } from '../views/login/login.component';
import { AboutComponent } from '../views/about/about.component';

const routes: Routes = [
  {path: '', component: HomeComponent },
  {path: 'login', component: LoginComponent },
  {path: 'about-us', component: AboutComponent }
]

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

// export { AppRoutingModule }
