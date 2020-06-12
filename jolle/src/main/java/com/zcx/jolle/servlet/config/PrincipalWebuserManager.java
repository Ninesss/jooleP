package com.zcx.jolle.servlet.config;
import java.util.ArrayList;
import java.util.Collection;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Service;
import com.zcx.jolle.entity.Webuser;

@Service
/*This class manages the DAO Authentication Manager*/
public class PrincipalWebuserManager implements UserDetails{
	private static final long serialVersionUID = 1L;
	
	@Autowired
	private Webuser webuser;
	
	public PrincipalWebuserManager(Webuser webuser) {
		this.webuser = webuser;
	}
	
	@Override
	public Collection<? extends GrantedAuthority> getAuthorities() {
		List<GrantedAuthority> grantedAuth = new ArrayList<>();
		return grantedAuth;
	}

	@Override
	public String getPassword() {
		return webuser.getPassword();
	}

	@Override
	public String getUsername() {
		return webuser.getUsername();
	}

	@Override
	public boolean isAccountNonExpired() {
		// TODO Auto-generated method stub
		return true;
	}

	@Override
	public boolean isAccountNonLocked() {
		// TODO Auto-generated method stub
		return true;
	}

	@Override
	public boolean isCredentialsNonExpired() {
		// TODO Auto-generated method stub
		return true;
	}

	@Override
	public boolean isEnabled() {
		// TODO Auto-generated method stub
		return true;
	}
	
}