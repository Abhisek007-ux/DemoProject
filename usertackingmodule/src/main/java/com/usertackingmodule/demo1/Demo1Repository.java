package com.usertackingmodule.demo1;

import java.util.List;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;



public interface Demo1Repository  extends CrudRepository<Demo1Entity, Integer>{
		@Query(value="select to_char(registrationdate,'Mon') as name,count(*) as id,CURRENT_DATE as registrationdate,''as emailid ,'' as contactnumber from registereduserdata group by 1",nativeQuery=true)
		public List<Demo1Entity> getCountByMonth() ;

}
