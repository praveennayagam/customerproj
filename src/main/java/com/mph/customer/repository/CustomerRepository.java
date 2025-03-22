package com.mph.customer.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.mph.customer.entity.Customer;


@Repository
public interface CustomerRepository extends JpaRepository<Customer, Integer> {
//		@Query("select count(*) from customer")
//		Optional<Integer> findLastId();
}
