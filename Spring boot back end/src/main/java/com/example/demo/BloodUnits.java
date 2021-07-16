package com.example.demo;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="bloodunits")
public class BloodUnits {
	
	@Id
	private String bloodgroup;
	private int units;
	public String getBloodgroup() {
		return bloodgroup;
	}
	public void setBloodgroup(String bloodgroup) {
		this.bloodgroup = bloodgroup;
	}
	public int getUnits() {
		return units;
	}
	public void setUnits(int units) {
		this.units = units;
	}
	@Override
	public String toString() {
		return "BloodUnits [bloodgroup=" + bloodgroup + ", units=" + units + "]";
	}
	
	
	
}
