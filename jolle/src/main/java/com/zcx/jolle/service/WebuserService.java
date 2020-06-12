package com.zcx.jolle.service;
import com.zcx.jolle.entity.Webuser;
import org.springframework.security.core.userdetails.UserDetails;

public interface WebuserService {

	Webuser getWebuserByUsername(String username);
	Boolean checkWebuserExistence(String username);
	UserDetails loadWebuserByUsername(String username);
}

