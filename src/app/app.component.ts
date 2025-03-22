import { Component } from '@angular/core';
import { CustService } from './cust.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'custproj';
  customer : any=[];
  constructor(private custservice: CustService) {}

  ngOnInit(){
    this.customer=this.custservice.getAllCustomer().subscribe((cust)=>(this.customer=cust));
    console.log(this.customer);
  }

  
}
