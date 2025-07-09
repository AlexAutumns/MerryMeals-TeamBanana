package com.teambanana.mealsonwheels;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;

@SpringBootApplication
@EntityScan(basePackages = "com.teambanana.mealsonwheels.model")
public class MealsonwheelsApplication {

	public static void main(String[] args) {
		SpringApplication.run(MealsonwheelsApplication.class, args);
	}

}