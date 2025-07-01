package com.teambanana.mealsonwheels.service.Interface;

import com.teambanana.mealsonwheels.model.Meal;

import java.util.List;
import java.util.Optional;

public interface MealService {

    Meal createMeal(Meal meal);

    List<Meal> getAllMeals();

    Optional<Meal> getMealById(Long id);

    Meal updateMeal(Long id, Meal updatedMeal);

    void deleteMeal(Long id);
}
