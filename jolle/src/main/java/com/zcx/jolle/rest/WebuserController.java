package com.zcx.jolle.rest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.LockedException;
import org.springframework.security.core.context.SecurityContext;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.zcx.jolle.entity.Webuser;
import com.zcx.jolle.jwt.JwtUser;
import com.zcx.jolle.jwt.JwtUtils;
import com.zcx.jolle.service.WebuserService;

@RestController
@CrossOrigin
public class WebuserController {

	@Autowired
	private WebuserService userService;

	@Autowired
	private JwtUtils jwtUtils;

	private static SecurityContext securityContext;

	@RequestMapping(path = "/authenticate", method = RequestMethod.POST)
	public ResponseEntity<Webuser> login(@RequestBody JwtUser jwtUser) throws LockedException {

		String bearerToken = null;

		Webuser webuser = userService.getWebuserByUsername((jwtUser.getUsername()));
		System.out.println("hello");
		System.out.println(webuser);
		
		if (webuser != null) {

			if (webuser.getUsername().equals(jwtUser.getUsername())
					&& webuser.getPassword().equals(jwtUser.getPassword())) {

				bearerToken = jwtUtils.generateToken(webuser.getUsername());

				webuser.setSessionToken(bearerToken);

				return new ResponseEntity<Webuser>(webuser, HttpStatus.OK);

			}

		}
		return new ResponseEntity<>(HttpStatus.NOT_FOUND);

	}

	@RequestMapping(path = "/user/logout", method = RequestMethod.POST)
	public ResponseEntity<String> logout() {

		securityContext = SecurityContextHolder.getContext();
		System.out.println(securityContext.getAuthentication().getName() + "inside logout");
		securityContext.setAuthentication(null);

		if (securityContext.getAuthentication() == null) {

			return new ResponseEntity<String>("logout sucessful", HttpStatus.OK);
		}

		return new ResponseEntity<String>("user could not logout", HttpStatus.NO_CONTENT);

	}

	@RequestMapping(path = "/user/token/validity", method = RequestMethod.GET)
	public ResponseEntity<Boolean> tokenValidity() {

		securityContext = SecurityContextHolder.getContext();

		String user = securityContext.getAuthentication().getName();
		String token = securityContext.getAuthentication().getCredentials().toString();
		boolean validity = false;
		System.out.println(token+user);

		if ((!user.isEmpty() && user != null) && (token != null && !token.isEmpty())) {

			validity = jwtUtils.validateToken(token, user);

			if (validity) {

				return new ResponseEntity<Boolean>(validity, HttpStatus.OK);

			}

		}

		return new ResponseEntity<Boolean>(validity, HttpStatus.OK);
	}

	

}