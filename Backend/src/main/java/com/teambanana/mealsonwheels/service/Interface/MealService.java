package com.teambanana.mealsonwheels.service.Interface;

import com.teambanana.mealsonwheels.model.Meal;
import java.util.List;
import java.util.Optional;

public interface MealService {

    // Create a new meal entry
    Meal createMeal(Meal meal); // TODO: Add DTO

    // Retrieve all meals
    List<Meal> getAllMeals();

    // Retrieve a meal by its ID
    Optional<Meal> getMealById(Long id);

    // Update an existing meal entry
    Meal updateMeal(Long id, Meal updatedMeal); // TODO: Use DTO

    // Delete a meal by its ID
    void deleteMeal(Long id);
}
