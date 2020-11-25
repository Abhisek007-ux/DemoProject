package com.usertackingmodule.demo1;

import static org.junit.Assert.assertThat;
import static org.junit.jupiter.api.Assertions.*;

import java.util.Date;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;

class Demo1ServiceTest {

	@Autowired
	private Demo1Service service;
	
	@Test
	void testFindChartData() throws Exception {
		assertNotEquals(null, service.findChartData());
	}

	@Test
	void test() throws Exception {
		assertNotEquals(null, service.getClass()());
	}
	@Test
	void testfindData() throws Exception {
		assertNotEquals(null, service.findData());
	}
	@Test
	void testinsertData() throws Exception {
		Demo1Entity entity=new Demo1Entity(20,"Akash",new Date(),"992334789","akash@gmail.com");
		assertNotEquals(false, service.insertData(entity));
	}
	@Test
	void testdeleteData() throws Exception {
		assertNotEquals(false, service.deleteData(1));
	}
}
