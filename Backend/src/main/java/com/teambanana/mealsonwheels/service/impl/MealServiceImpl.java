package com.teambanana.mealsonwheels.service.impl;

import com.teambanana.mealsonwheels.model.Meal;
import com.teambanana.mealsonwheels.repository.MealRepository;
import com.teambanana.mealsonwheels.service.Interface.MealService;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class MealServiceImpl implements MealService {

    private final MealRepository mealRepository;

    public MealServiceImpl(MealRepository mealRepository) {
        this.mealRepository = mealRepository;
    }

    @Override
    public Meal createMeal(Meal meal) {
        return mealRepository.save(meal); // TODO: Use DTO for input validation
    }

    @Override
    public List<Meal> getAllMeals() {
        return mealRepository.findAll();
    }

    @Override
    public Optional<Meal> getMealById(Long id) {
        return mealRepository.findById(id);
    }

    @Override
    public Meal updateMeal(Long id, Meal mealDetails) {
        return mealRepository.findById(id)
                .map(meal -> {
                    meal.setName(mealDetails.getName());
                    meal.setDescription(mealDetails.getDescription());
                    meal.setPreparationDate(mealDetails.getPreparationDate());
                    meal.setCalories(mealDetails.getCalories());
                    meal.setFrozen(mealDetails.isFrozen());
                    meal.setType(mealDetails.getType());
                    meal.setPreparedBy(mealDetails.getPreparedBy());
                    // TODO: Add field validation or switch to DTO for safe update
                    return mealRepository.save(meal);
                }).orElseThrow(() -> new RuntimeException("Meal not found with id " + id));
    }

    @Override
    public void deleteMeal(Long id) {
        mealRepository.deleteById(id);
    }
}
