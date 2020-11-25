package com.usertackingmodule.service;

import static org.junit.jupiter.api.Assertions.*;

import org.junit.Test;
import org.springframework.beans.factory.annotation.Autowired;

class DeleteDataServiceTest {

	@Autowired
	private DeleteDataService service;
	
	@Test
	public void getEntryById(int id) {
		
		
	assertNotEquals(null, service.deleteEntry(id));
		
	}
	

}
