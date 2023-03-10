import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CompanyListComponent } from './company-list/company-list.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
 
    {path:'',component:LoginComponent},
    {path:'login',component:LoginComponent},
    {path:'companyList',component:CompanyListComponent}
    
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
