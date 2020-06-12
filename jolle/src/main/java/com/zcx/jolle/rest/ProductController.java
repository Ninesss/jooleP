package com.zcx.jolle.rest;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.zcx.jolle.entity.Product;
import com.zcx.jolle.service.ProductService;

@RequestMapping("/product")
@RestController
@CrossOrigin
public class ProductController {

	@Autowired
	ProductService productServ;
	
	/*Get a Json object with all the resources*/
	@RequestMapping(value = "/HVAC Fans", method = RequestMethod.GET)
	public ResponseEntity<List<Product>> getAllProduct(){
		return new ResponseEntity<List<Product>>(productServ.getAllProduct(),HttpStatus.OK);
	}
	
	@RequestMapping(value = "/{productId}", method = RequestMethod.GET)
	public Product getProductByProductId(@PathVariable int productId) {
		Product product;
		product = productServ.getProductByProductId(productId);
		return product;
	}
}
