import { Component,ElementRef,OnInit, TemplateRef } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import company from '../../assets/data/company.json'

@Component({
  selector: 'app-company-list',
  templateUrl: './company-list.component.html',
  styleUrls: ['./company-list.component.css']
})
export class CompanyListComponent implements OnInit {
  
   showModal:boolean=false;
  public companyList: { id: number, Name: string, Revenue: string, Establish_Year: number, Employee_no: number, Industry: string ,image:string,CEO:string,headquarter:string,Expenditure:string,Profit:string,EmployeeDetails:[]}[] = company
    
  companyDetails: { id: number, Name: string, Revenue: string, Establish_Year: number, Employee_no: number, Industry: string ,image:string,CEO:string,headquarter:string,Expenditure:string,Profit:string,EmployeeDetails:[]};
  EmployeeDetails:{Name:string,Experience:string,Technology:string} [];
    
   
  constructor(private modal_popup: NgbModal){}


  ngOnInit(): void {
  }
  showCompanyDetails(index:number,popup:TemplateRef<string>){
   this.showModal = true;
    this.modal_popup.open(popup)
    this.companyDetails = this.companyList[index]
   
    
  }
  showEmployeeDetails(index:number,popup:TemplateRef<string>){

    this.showModal=true;
    this.modal_popup.open(popup);
    this.companyDetails = this.companyList[index]
    this.EmployeeDetails = this.companyList[index].EmployeeDetails;

  }
  onClose(){
    this.showModal=false;
  }

   
}
