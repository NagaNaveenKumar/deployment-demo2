package com.example.demo;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

public interface AdminRepository extends JpaRepository<Admin, Integer> {

	@Query(value="SELECT * FROM Admin WHERE name = ?1 and password = ?2",nativeQuery=true)
	List<Admin> findAdminByNameAndPassword(String name,String password);

}
