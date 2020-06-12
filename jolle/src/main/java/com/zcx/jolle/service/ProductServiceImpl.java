package com.zcx.jolle.service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.zcx.jolle.dao.ProductDAO;
import com.zcx.jolle.entity.Product;

@Service
public class ProductServiceImpl implements ProductService{
	
	@Autowired
	private ProductDAO productDAO;

	@Override
	public Product getProductByProductId(int productId) {
		return productDAO.getProductByProductId(productId);
	}

	@Override
	public List<Product> getAllProduct() {
		List<Product> List = (ArrayList<Product>) productDAO.findAll();

		return List;
	}

}
