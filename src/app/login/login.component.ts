import { Component,OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import credentials from '../../assets/data/credentials.json'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
    
  title="reactiveForm";
  public userList:{id:number,name:string,email:string,password:number}[]=credentials;
  
   reactiveForm : FormGroup;
  userName: string;
  userPassword: any;
   constructor( public routing :Router){}

  ngOnInit(): void {
   
    this.reactiveForm = new FormGroup({

      userName: new FormControl(null, Validators.required),
      userPassword: new FormControl(null, Validators.required),
  }); 
  }

onSubmit(){

this.userName= this.reactiveForm.value.userName;
this.userPassword= this.reactiveForm.value.userPassword;

  for (let i = 0;i < this.userList.length;i++) {

   if( this.userName == this.userList[i].name  && this.userPassword == this.userList[i].password  ){
    this.routing.navigate(['/companyList'])
   }
    else{
      // alert("please enter correct credentials..")
    }
  }
}

onReset(){
  this.reactiveForm.value.userName=""
}

}
