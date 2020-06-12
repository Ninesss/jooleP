package com.zcx.jolle.service;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;
import com.zcx.jolle.dao.WebuserDAO;
import com.zcx.jolle.entity.Webuser;
import com.zcx.jolle.servlet.config.PrincipalWebuserManager;

@Service
public class WebuserServiceImpl implements WebuserService{
	@Autowired
	WebuserDAO webuserDAO;
	
	@Override
	public Webuser getWebuserByUsername(String username) {
		
		return webuserDAO.findWebuserByUsername(username);
	}
	
	@Override
	public Boolean checkWebuserExistence(String username) {
		
		return webuserDAO.existsByUsername(username);
	}
	

	/**method for DAOAuthenticationManager*/
	@Override
	public UserDetails loadWebuserByUsername(String username) throws UsernameNotFoundException {
		Webuser webuser = webuserDAO.findWebuserByUsername(username);
		if (webuser== null) {
			return null;
		}
	
		return new PrincipalWebuserManager(webuser);
	}
}
