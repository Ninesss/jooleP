package com.zcx.jolle.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.zcx.jolle.entity.Product;


public interface ProductDAO extends JpaRepository<Product, Integer>{

	Product getProductByProductId(int productId);
	
	
}
