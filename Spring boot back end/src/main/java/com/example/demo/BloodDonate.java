package com.example.demo;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="blooddonate")
public class BloodDonate {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int donid;
	private String name;
	private String age;
	private String bloodgroup;
	private int units;
	
	public int getDonid() {
		return donid;
	}
	public void setDonid(int donid) {
		this.donid = donid;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getAge() {
		return age;
	}
	public void setAge(String age) {
		this.age = age;
	}
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
		return "BloodDonate [donid=" + donid + ", name=" + name + ", age=" + age + ", bloodgroup=" + bloodgroup
				+ ", units=" + units + "]";
	}
	
	
	
}
