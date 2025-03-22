import { Component } from '@angular/core';
import { CustService } from '../cust.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-custedit',
  templateUrl: './custedit.component.html',
  styleUrls: ['./custedit.component.css']
})
export class CusteditComponent {

  customer: any = {
    name: '',
   
  };
  submitted = false;

  constructor(
    private custService: CustService,
    public router: Router,
    private aroute: ActivatedRoute	
  ) {}
  public id: any = this.aroute.snapshot.params['id'];   

  ngOnInit() {		
    this.custService
      .getCustomerById(this.id)
      .subscribe((cust: any) => (this.customer = cust));
    console.log(this.customer);
  }

  updateCustomer() {
    console.log(this.custService);
    this.custService
      .updateCustomer(this.customer)		
      .subscribe((data: {}) => this.router.navigate(['/custlist']));
  }

  onSubmit() {
    this.submitted = true;
    alert('Customer datas are validated successfully!');
  }
}
