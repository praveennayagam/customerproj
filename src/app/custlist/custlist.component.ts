import { Component } from '@angular/core';
import { CustService } from '../cust.service';
import { Router } from '@angular/router';
import { Customer } from 'src/Customer';

@Component({
  selector: 'app-custlist',
  templateUrl: './custlist.component.html',
  styleUrls: ['./custlist.component.css']
})
export class CustlistComponent {
  customer: any = [];
  constructor(private custservice:CustService,private router:Router){}
  selectedId: number = 0;
    ngOnInit(){
    this.customer=this.custservice.getAllCustomer().subscribe((cust)=>(this.customer=cust));
    console.log(this.customer);
  }

  onDelete(cust: Customer) {
    this.selectedId = cust.id;
    console.log(cust);
    this.custservice
      .deleteCustomer(this.selectedId)
      .subscribe((data: {}) => this.router.navigate(['/emplist']));
  }
  
}
