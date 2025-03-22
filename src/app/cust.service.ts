import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Customer } from 'src/Customer';

@Injectable({
  providedIn: 'root'
})
export class CustService {
  apiUrl :string='http://localhost:8069/customer';
  httpOptions ={
    headers:new Headers({
      'Content-Type':'application/json',
    }),
  };
    constructor(private http : HttpClient) { }
    getAllCustomer():Observable<any>{
      return this.http.get<any>(this.apiUrl + '/listallcust');
    }
    createCustomer(customer:Customer):Observable<Customer>{
      return this.http.post<Customer>(this.apiUrl  + '/addcust', customer);
    }
    deleteCustomer(id:number):Observable<Customer>{
      return this.http.delete<Customer>
      (`${this.apiUrl}/deletebyid/${id}`);
    }
    getCustomerById(id: number): Observable<Customer> {
  return this.http.get<any>(`${this.apiUrl}/getcustbyid/${id}`);
}
updateCustomer(customer: Customer): Observable<Customer> {
  return this.http.put<Customer>(this.apiUrl + '/updatecust',customer);
}

}
