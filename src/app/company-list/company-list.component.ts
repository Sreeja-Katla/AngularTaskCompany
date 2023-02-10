import { Component,ElementRef,OnInit, TemplateRef } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import company from '../../assets/data/company.json'
import { CompanydetailsComponent } from '../companydetails/companydetails.component';

@Component({
  selector: 'app-company-list',
  templateUrl: './company-list.component.html',
  styleUrls: ['./company-list.component.css']
})
export class CompanyListComponent implements OnInit {
  
   
  public companyList: { id: number, Name: string, Revenue: string, Establish_Year: number, Employee_no: number, Industry: string ,image:string,CEO:string,headquarter:string,Expenditure:string,Profit:string,EmployeeDetails:[]}[] = company
    
  companyDetails: { id: number, Name: string, Revenue: string, Establish_Year: number, Employee_no: number, Industry: string ,image:string,CEO:string,headquarter:string,Expenditure:string,Profit:string,EmployeeDetails:[]};
  EmployeeDetails:{Name:string,Experience:string,Technology:string} [];
  bsModalRef: any;
    
   
  constructor(private modal_popup: NgbModal){}


  ngOnInit(): void {
  }
  showCompanyDetails(index:number,popup:TemplateRef<string>){
  
    this.modal_popup.open(popup)
    this.companyDetails = this.companyList[index]
   
    
  }
  showEmployeeDetails(index:number,popup:TemplateRef<string>){

   
    this.modal_popup.open(popup);
    this.companyDetails = this.companyList[index]
    this.EmployeeDetails = this.companyList[index].EmployeeDetails;

  }
  onClose(){
   
    this.modal_popup.dismissAll();
  }
  // openModalWithComponent() {
  //   const initialState: ModalOptions = {
  //     initialState: {
  //       list: [
  //         'Open a modal with component',
  //         'Pass your data',
  //         'Do something else',
  //         '...'
  //       ],
  //       title: 'Modal with component'
  //     }
  //   };
  //   this.bsModalRef = this.modalService.show(CompanydetailsComponent, initialState);
  //   this.bsModalRef.content.closeBtnName = 'Close';
  // }

   
}
