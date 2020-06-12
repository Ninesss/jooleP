package com.zcx.jolle;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

import com.zcx.jolle.entity.Webuser;

@SpringBootApplication
public class JolleApplication {

	public static void main(String[] args) {
		SpringApplication.run(JolleApplication.class, args);
	}
	
	@Bean
	public Webuser webuser() {
		return new Webuser();
	}
}
