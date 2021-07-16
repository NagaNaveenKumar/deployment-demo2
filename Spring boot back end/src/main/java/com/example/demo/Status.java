package com.example.demo;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="status")
public class Status {
	
	@Id
	private int id;
	private String curstatus;
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getCurstatus() {
		return curstatus;
	}
	public void setCurstatus(String curstatus) {
		this.curstatus = curstatus;
	}
	@Override
	public String toString() {
		return "Status [id=" + id + ", curstatus=" + curstatus + "]";
	}
	
	
}
