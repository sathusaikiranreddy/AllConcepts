import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './features/dashboard/dashboard.component';
import { Login } from './features/login/login.component';

const routes: Routes = [
  {path:"", pathMatch:"full",redirectTo:"/login"},
  {path:"login", component:Login},
  {path:"allConcepts", component: DashboardComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
