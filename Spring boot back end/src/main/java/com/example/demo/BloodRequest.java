package com.example.demo;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="bloodrequest")
public class BloodRequest {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int reqid;
	private String name;
	private String age;
	private String bloodgroup;
	private int units;
	public int getReqid() {
		return reqid;
	}
	public void setReqid(int reqid) {
		this.reqid = reqid;
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
		return "BloodRequest [reqid=" + reqid + ", name=" + name + ", age=" + age + ", bloodgroup=" + bloodgroup
				+ ", units=" + units + "]";
	}
	
	
}
