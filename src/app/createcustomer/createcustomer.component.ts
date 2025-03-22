import { Component } from '@angular/core';
import { CustService } from '../cust.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-createcustomer',
  templateUrl: './createcustomer.component.html',
  styleUrls: ['./createcustomer.component.css']
})
export class CreatecustomerComponent {

  customer: any = {
    name: ''
  };
  submitted=false;
  constructor(private empService: CustService, public router: Router) {}
  addCustomer() {
    console.log(this.customer);
    this.empService
      .createCustomer(this.customer)
      .subscribe((data: {}) => this.router.navigate(['/custlist']));
  }
  onSubmit() {
    this.submitted = true;
    alert('Customer datas are validated successfully!');
  }
}
