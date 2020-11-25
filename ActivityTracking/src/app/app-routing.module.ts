import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddUserComponent } from './add-user/add-user.component';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { MydashboardComponent } from './mydashboard/mydashboard.component';


const routes: Routes = [
  { path: '', redirectTo:'/home', pathMatch: 'full' },
{ path: 'home', component: HomeComponent },
{ path: 'createuser', component: AddUserComponent },


{path: 'dashboard',component: MydashboardComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
