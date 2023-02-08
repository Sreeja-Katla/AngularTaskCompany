import { Component,OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import company from '../../assets/data/company.json'

@Component({
  selector: 'app-company-list',
  templateUrl: './company-list.component.html',
  styleUrls: ['./company-list.component.css']
})
export class CompanyListComponent implements OnInit {
  
   showModel:boolean=false;
  public companyList: { id: number, Name: string, Revenue: string, Establish_Year: number, Employee_no: number, Industry: string ,image:string,CEO:string,headquarter:string,Expenditure:string,Profit:string,EmployeeDeatails:[]}[] = company
    
  companyDetails: { id: number, Name: string, Revenue: string, Establish_Year: number, Employee_no: number, Industry: string ,image:string,CEO:string,headquarter:string,Expenditure:string,Profit:string,EmployeeDeatails:[]};
  EmployeeDeatails:{Name:string,Experience:string,Technology:string} [];
    
   
  constructor(private modal_popup: NgbModal){}


  ngOnInit(): void {
  }
  showCompanyDetails(index:number,popup:any){
   
    this.modal_popup.open(popup)
    this.companyDetails = this.companyList[index]
   
    
  }
  showEmployeeDetails(index:number,popup:any){
    
    this.showModel=true;
    this.modal_popup.open(popup);
    this.companyDetails = this.companyList[index]
    this.EmployeeDeatails = this.companyList[index].EmployeeDeatails;

  }
  onClse(){
    this.showModel=false;
  }

   
}
