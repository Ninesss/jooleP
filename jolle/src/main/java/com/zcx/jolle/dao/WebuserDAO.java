package com.zcx.jolle.dao;
import org.springframework.data.repository.CrudRepository;
import com.zcx.jolle.entity.Webuser;

public interface WebuserDAO extends CrudRepository<Webuser, Integer>{

	Webuser findWebuserByUsername(String username);
	Boolean existsByUsername(String username);
}
