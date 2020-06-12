package com.zcx.jolle.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="Product")
public class Product {
	
	//fields

	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	@Column(name="product_id")
	private int productId;
	
	@Column(name="manufacturer")
	private String manufacturer;
	
	@Column(name="series")
	private String series;
	
	@Column(name="model")
	private String model;
	
	@Column(name="use_type")
	private String useType;
	
	@Column(name="application")
	private String application;
	
	@Column(name="location")
	private String location;
	
	@Column(name="accessories")
	private String accessories;
	
	@Column(name="model_year")
	private int modelYear;
	
	@Column(name="airflow")
	private int airflow;
	
	@Column(name="power_min")
	private int powerMin;
	
	@Column(name="power_max")
	private int powerMax;
	
	@Column(name="voltage_min")
	private int voltageMin;
	
	@Column(name="voltage_max")
	private int voltageMax;
	
	@Column(name="fanspeed_min")
	private int fanspeedMin;
	
	@Column(name="fanspeed_max")
	private int fanspeedMax;
	
	@Column(name="speed_number")
	private int speedNumber;
	
	@Column(name="sound")
	private int sound;
	
	@Column(name="diameter")
	private int diameter;
	
	@Column(name="height_min")
	private int heightMin;
	
	@Column(name="height_max")
	private int heightMax;
	
	@Column(name="weight")
	private int weight;
	
	@Column(name="details")
	private String details;
	
	//constructor
	
	public Product() {
		
	}

	public Product(int productId, String manufacturer, String series, String model, String useType, String application,
			String location, String accessories, int modelYear, int fairflow, int powerMin, int powerMax,
			int voltageMin, int voltageMax, int fanspeedMin, int fanspeedMax, int speedNumber, int sound, int diameter,
			int heightMin, int heightMax, int weight, String details) {
		super();
		this.productId = productId;
		this.manufacturer = manufacturer;
		this.series = series;
		this.model = model;
		this.useType = useType;
		this.application = application;
		this.location = location;
		this.accessories = accessories;
		this.modelYear = modelYear;
		this.airflow = fairflow;
		this.powerMin = powerMin;
		this.powerMax = powerMax;
		this.voltageMin = voltageMin;
		this.voltageMax = voltageMax;
		this.fanspeedMin = fanspeedMin;
		this.fanspeedMax = fanspeedMax;
		this.speedNumber = speedNumber;
		this.sound = sound;
		this.diameter = diameter;
		this.heightMin = heightMin;
		this.heightMax = heightMax;
		this.weight = weight;
		this.details = details;
	}

	//getter and setter
	
	public int getProductId() {
		return productId;
	}

	public void setProductId(int productId) {
		this.productId = productId;
	}

	public String getManufacturer() {
		return manufacturer;
	}

	public void setManufacturer(String manufacturer) {
		this.manufacturer = manufacturer;
	}

	public String getSeries() {
		return series;
	}

	public void setSeries(String series) {
		this.series = series;
	}

	public String getModel() {
		return model;
	}

	public void setModel(String model) {
		this.model = model;
	}

	public String getUseType() {
		return useType;
	}

	public void setUseType(String useType) {
		this.useType = useType;
	}

	public String getApplication() {
		return application;
	}

	public void setApplication(String application) {
		this.application = application;
	}

	public String getLocation() {
		return location;
	}

	public void setLocation(String location) {
		this.location = location;
	}

	public String getAccessories() {
		return accessories;
	}

	public void setAccessories(String accessories) {
		this.accessories = accessories;
	}

	public int getModelYear() {
		return modelYear;
	}

	public void setModelYear(int modelYear) {
		this.modelYear = modelYear;
	}

	public int getAirflow() {
		return airflow;
	}

	public void setAirflow(int airflow) {
		this.airflow = airflow;
	}

	public int getPowerMin() {
		return powerMin;
	}

	public void setPowerMin(int powerMin) {
		this.powerMin = powerMin;
	}

	public int getPowerMax() {
		return powerMax;
	}

	public void setPowerMax(int powerMax) {
		this.powerMax = powerMax;
	}

	public int getVoltageMin() {
		return voltageMin;
	}

	public void setVoltageMin(int voltageMin) {
		this.voltageMin = voltageMin;
	}

	public int getVoltageMax() {
		return voltageMax;
	}

	public void setVoltageMax(int voltageMax) {
		this.voltageMax = voltageMax;
	}

	public int getFanspeedMin() {
		return fanspeedMin;
	}

	public void setFanspeedMin(int fanspeedMin) {
		this.fanspeedMin = fanspeedMin;
	}

	public int getFanspeedMax() {
		return fanspeedMax;
	}

	public void setFanspeedMax(int fanspeedMax) {
		this.fanspeedMax = fanspeedMax;
	}

	public int getSpeedNumber() {
		return speedNumber;
	}

	public void setSpeedNumber(int speedNumber) {
		this.speedNumber = speedNumber;
	}

	public int getSound() {
		return sound;
	}

	public void setSound(int sound) {
		this.sound = sound;
	}

	public int getDiameter() {
		return diameter;
	}

	public void setDiameter(int diameter) {
		this.diameter = diameter;
	}

	public int getHeightMin() {
		return heightMin;
	}

	public void setHeightMin(int heightMin) {
		this.heightMin = heightMin;
	}

	public int getHeightMax() {
		return heightMax;
	}

	public void setHeightMax(int heightMax) {
		this.heightMax = heightMax;
	}

	public int getWeight() {
		return weight;
	}

	public void setWeight(int weight) {
		this.weight = weight;
	}

	public String getDetails() {
		return details;
	}

	public void setDetails(String details) {
		this.details = details;
	}

	//toString
	@Override
	public String toString() {
		return "Product [productId=" + productId + ", manufacturer=" + manufacturer + ", series=" + series + ", model="
				+ model + ", useType=" + useType + ", application=" + application + ", location=" + location
				+ ", accessories=" + accessories + ", modelYear=" + modelYear + ", airflow=" + airflow + ", powerMin="
				+ powerMin + ", powerMax=" + powerMax + ", voltageMin=" + voltageMin + ", voltageMax=" + voltageMax
				+ ", fanspeedMin=" + fanspeedMin + ", fanspeedMax=" + fanspeedMax + ", speedNumber=" + speedNumber
				+ ", sound=" + sound + ", diameter=" + diameter + ", heightMin=" + heightMin + ", heightMax="
				+ heightMax + ", weight=" + weight + ", details=" + details + "]";
	}
	
}
