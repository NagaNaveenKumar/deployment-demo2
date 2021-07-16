package com.example.demo;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.transaction.annotation.Transactional;

@Transactional
public interface StatusRepository extends JpaRepository<Status, Integer> {

	@Modifying(clearAutomatically = true)
	@Query(value="update Status set curstatus=?2 where id=?1",nativeQuery=true)
	void updateStatus(int id,String status);	
	
}
