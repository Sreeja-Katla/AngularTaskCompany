import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BsModalRef, BsModalService, ModalModule } from 'ngx-bootstrap/modal';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CompanyListComponent } from './company-list/company-list.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { CompanydetailsComponent } from './companydetails/companydetails.component';
import { CreateCompanyComponent } from './create-company/create-company.component';
import { BnNgIdleService } from 'bn-ng-idle'; // import bn-ng-idle service

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    CompanyListComponent,
    HeaderComponent,
    FooterComponent,
    CompanydetailsComponent,
    CreateCompanyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    ModalModule

  ],
  providers: [BsModalService,BsModalRef,BnNgIdleService],
  bootstrap: [AppComponent]
})
export class AppModule { }
