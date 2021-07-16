package com.example.demo;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

public interface UserRepository extends JpaRepository<User, Integer> {
	
	@Query(value="SELECT * FROM User WHERE name = ?1 and password = ?2",nativeQuery=true)
	List<User> findUserByNameAndPassword(String name,String password);
	
}
