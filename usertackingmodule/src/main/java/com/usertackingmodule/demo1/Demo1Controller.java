package com.usertackingmodule.demo1;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class Demo1Controller {
	
	@Autowired
	private Demo1Service service;
	
	@PostMapping(value="/insertData")
	public ResponseEntity<Demo1Entity>addData(@RequestBody Demo1Entity entity){
		
		return new ResponseEntity<Demo1Entity>(service.insertData(entity), HttpStatus.OK);
		
	}

	@PostMapping(value="/deleteData/{id}")
	public ResponseEntity<Boolean>deleteData(@PathVariable(value="id")int id){
		
		try {
			return new ResponseEntity<Boolean>(service.deleteData(id), HttpStatus.OK);
		} catch (Exception e) {
			
			e.printStackTrace();
			return new ResponseEntity<Boolean>(true,HttpStatus.BAD_REQUEST);
		}
	}
	
	@PostMapping(value="/getAllData")
	public ResponseEntity<List<Demo1Entity>>getAllData(){
		
		try {
			return new ResponseEntity<List<Demo1Entity>>(service.findData(), HttpStatus.OK);
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		return null;
		
	}
	
	@PostMapping(value="/getDataByMonth")
	public ResponseEntity<List<Demo1Entity>>getDataByMonth(){
		
		try {
			return new ResponseEntity<List<Demo1Entity>>(service.findChartData(), HttpStatus.OK);
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		return null;
		
	}
	
	
}
