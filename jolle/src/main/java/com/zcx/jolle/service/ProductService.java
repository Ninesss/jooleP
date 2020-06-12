package com.zcx.jolle.service;

import java.util.List;


import com.zcx.jolle.entity.Product;

public interface ProductService {

	Product getProductByProductId(int productId);
	
	List<Product> getAllProduct();
	
}
