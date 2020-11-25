package com.usertackingmodule.service;

import static org.junit.jupiter.api.Assertions.*;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;

import com.usertackingmodule.dto.EntryDataDto;

class EntryDataServiceTest {

	@Autowired
	private EntryDataService service;
	
	@Test
	public void insertEntry(EntryDataDto entryData) {
		
		
	assertNotEquals("", service.insertEntry(entryData));
		
	}

}
