package com.example.demo;

import java.util.ArrayList;
import java.util.LinkedHashMap;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;


@Controller
public class AppController {
	
	@Autowired
	private UserRepository userrepo;
	
	@Autowired
	private AdminRepository adminrepo;
	
	@Autowired
	private BloodRequestRepository reqrepo;
	
	@Autowired
	private BloodDonateRepository donrepo;
	
	@Autowired
	private BloodUnitsRepository unitrepo;
	
	@Autowired
	private StatusRepository statusrepo;
	
	//User login/signup
	
	@CrossOrigin(origins = "http://localhost:4200")
	@GetMapping("users")
	@ResponseBody
	public List<User> getUsers(){
		return userrepo.findAll();
	}
	
	@CrossOrigin(origins = "http://localhost:4200")
	@GetMapping("login")
	@ResponseBody
	public List<User> getUser(@RequestParam("username")String username,@RequestParam("password")String password) {
		return userrepo.findUserByNameAndPassword(username,password);
	}
	
	@CrossOrigin(origins = "http://localhost:4200")
	@PostMapping("/user")
	@ResponseBody
	public User postUser(@RequestBody User user) {
		userrepo.save(user);
		return user;
	}
	
	//Admin login
	
	@CrossOrigin(origins = "http://localhost:4200")
	@GetMapping("adminlogin")
	@ResponseBody
	public List<Admin> getAdmin(@RequestParam("username")String username,@RequestParam("password")String password) {
		return adminrepo.findAdminByNameAndPassword(username,password);
	}
	
	//User Blood Donate/Request
	
	@CrossOrigin(origins = "http://localhost:4200")
	@PostMapping("/user/request")
	@ResponseBody
	public BloodRequest requestBlood(@RequestBody BloodRequest req) {
		reqrepo.save(req);
		System.out.println(req);
		Status s=new Status();
		s.setId(req.getReqid());
		s.setCurstatus("Pending");
		statusrepo.save(s);
		System.out.println(s);
		return req;	
	}
	
	@CrossOrigin(origins = "http://localhost:4200")
	@PostMapping("/user/donate")
	@ResponseBody
	public BloodDonate donateBlood(@RequestBody BloodDonate don) {
		unitrepo.updateUnits(don.getBloodgroup(),don.getUnits());
		donrepo.save(don);
		return don;	
	}
	
	//Admin 
	
	@CrossOrigin(origins = "http://localhost:4200")
	@GetMapping("/requests")
	@ResponseBody
	public List<BloodRequest> getRequests(){
		return reqrepo.findAll();
	}
	
	@CrossOrigin(origins = "http://localhost:4200")
	@GetMapping("/donations")
	@ResponseBody
	public List<BloodDonate> getDonations(){
		return donrepo.findAll();
	}
	
	//BloodUnits
	@CrossOrigin(origins = "http://localhost:4200")
	@GetMapping("/bloodunits")
	@ResponseBody
	public List<BloodUnits> getUnits(){
		return unitrepo.findAll(); 
	}
	
	//Updating Status

	@CrossOrigin(origins = "http://localhost:4200")
	@GetMapping("/status")
	@ResponseBody
	public List<Status> updateStatus(){
		return statusrepo.findAll(); 
	}	
	
	//Accept blood request
	@CrossOrigin(origins = "http://localhost:4200")
	@PostMapping("/user/accept")
	@ResponseBody
	public Optional<Status> donateBlood(@RequestBody ArrayList<Object> req) {
		LinkedHashMap<Object, Object> lmap=(LinkedHashMap<Object, Object>) req.get(0);
		int id=(int) lmap.get("reqid");
		int units=(int) lmap.get("units");
		String bloodgroup=(String) lmap.get("bloodgroup");
		String status=(String) req.get(1);
		unitrepo.updateReqUnits(bloodgroup,units);
		statusrepo.updateStatus(id,status);
		return statusrepo.findById(id);
	}
	
//	@CrossOrigin(origins = "http://localhost:4200")
//	@PostMapping("/user/accept")
//	@ResponseBody
//	public Optional<Status> donateBlood(@RequestBody BloodRequest req) {
//		unitrepo.updateReqUnits(req.getBloodgroup(),req.getUnits());
//		statusrepo.updateStatus(req.getReqid());
//		return statusrepo.findById(req.getReqid());
//	}
	
}
