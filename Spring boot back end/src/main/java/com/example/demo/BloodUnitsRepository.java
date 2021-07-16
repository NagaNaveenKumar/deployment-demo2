package com.example.demo;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.transaction.annotation.Transactional;

@Transactional
public interface BloodUnitsRepository extends JpaRepository<BloodUnits, String>{
	
	@Modifying(clearAutomatically = true)
	@Query(value="update BloodUnits set units=units+?2 where bloodgroup=?1",nativeQuery=true)
	void updateUnits(String bloodgroup,int units);	
	
	@Modifying(clearAutomatically = true)
	@Query(value="update BloodUnits set units=units-?2 where bloodgroup=?1",nativeQuery=true)
	void updateReqUnits(String bloodgroup,int units);	
}