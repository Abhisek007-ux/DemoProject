package com.usertackingmodule.demo1;

import java.util.Date;
import java.util.List;
import java.util.Map;
import java.util.function.Function;
import java.util.stream.Collectors;
import java.util.stream.Stream;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class Demo1Service {
	
	@Autowired	
	private Demo1Repository repo;

	public Demo1Entity insertData(Demo1Entity entity) {
		entity.setRegistrationDate(new Date());
		List<Demo1Entity> list=(List<Demo1Entity>) repo.findAll();
		entity.setId(list.size()+1);
		repo.save(entity);
		return entity;
	}
	
	public boolean deleteData(int id) throws Exception{
		try {
		repo.deleteById(id);
		return true;
		}catch(Exception e) {
			return false;
		}
	}

	
	public List<Demo1Entity> findData() throws Exception{
		try {
		
		return (List<Demo1Entity>) repo.findAll();
		}catch(Exception e) {
			return null;
		}
	}
	
	
	public List<Demo1Entity> findChartData() throws Exception{
		try {
			List<Demo1Entity> data=repo.getCountByMonth();
			System.out.println(data);
			 return repo.getCountByMonth();
		
		}catch(Exception e) {
			return null;
		}
	}
}
