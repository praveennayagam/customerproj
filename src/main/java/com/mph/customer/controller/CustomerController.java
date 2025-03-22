package com.mph.customer.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.mph.customer.entity.Customer;
import com.mph.customer.service.CustomerService;



@RestController
@RequestMapping("/customer")
@CrossOrigin(origins="http://localhost:4200",allowedHeaders = "*")
public class CustomerController {
	@Autowired
	CustomerService customerservice;
	
	@PostMapping("/addcust")
	public ResponseEntity<?> createCustomer(@RequestBody Customer customer) {
		customerservice.createCustomer(customer);
		return new ResponseEntity<>(customer,HttpStatus.CREATED) ;
	}	
		@GetMapping("/listallcust")
		public ResponseEntity<List<Customer>>getAllCustomer() {
			List<Customer>customer =customerservice.getAllCustomer();
			return ResponseEntity.ok(customer);
		}
		@PutMapping("/updatecust")
		public ResponseEntity<List<Customer>>updateCustomer(@RequestBody Customer customer) {
			List<Customer>updatecust =customerservice.updateCustomer(customer);
			return ResponseEntity.ok(updatecust);
		}
		@DeleteMapping("/deletebyid/{id}")
		public ResponseEntity<List<Customer>>deleteCustomer(@PathVariable int id) {
			List<Customer>deletecust =customerservice.deleteCustomer(id);
			return ResponseEntity.ok(deletecust);
		}
		
		@GetMapping("/getcustbyid/{id}")
		public ResponseEntity<Optional<Customer>>getCustomer(@PathVariable int id) {
			Optional<Customer>getcust =customerservice.getCustomerById(id);
			return ResponseEntity.ok(getcust);
		}
	}




