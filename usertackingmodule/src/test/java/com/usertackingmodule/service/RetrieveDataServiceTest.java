package com.usertackingmodule.service;

import static org.junit.jupiter.api.Assertions.assertNotEquals;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;

class RetrieveDataServiceTest {

	@Autowired
	private RetrieveDataService service;
	
	
	@Test
	public void getEntryById(int id) {
		
		
	assertNotEquals("", this.service.getDataById(id));
		
	}
	
	@Test
	public void getAllEntries(int id) {
		
	assertNotEquals("", this.service.getData());
		
	}
}
