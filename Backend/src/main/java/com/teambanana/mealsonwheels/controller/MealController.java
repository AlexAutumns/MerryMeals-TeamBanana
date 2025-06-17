package com.teambanana.mealsonwheels.controller;

import com.teambanana.mealsonwheels.Enum.MealType;
import com.teambanana.mealsonwheels.model.Meal;
import com.teambanana.mealsonwheels.model.User;
import com.teambanana.mealsonwheels.repository.MealRepository;
import com.teambanana.mealsonwheels.repository.UserRepository;

import org.springframework.http.ResponseEntity;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDate;
import java.time.format.DateTimeParseException;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/meals")
public class MealController {

    private final MealRepository mealRepository;
    private final UserRepository userRepository;

    public MealController(MealRepository mealRepository, UserRepository userRepository) {
        this.mealRepository = mealRepository;
        this.userRepository = userRepository;
    }

    // Basic get all meals (no pagination, no filtering)
    @GetMapping
    public List<Meal> getAllMeals() {
        return mealRepository.findAll();
    }

    // Get meal by ID
    @GetMapping("/{id}")
    public ResponseEntity<Meal> getMealById(@PathVariable Long id) {
        Optional<Meal> meal = mealRepository.findById(id);
        return meal.map(ResponseEntity::ok)
                .orElseGet(() -> ResponseEntity.notFound().build());
    }

    // Create new meal - NOTE: No validation yet, should add next time
    @PostMapping
    public ResponseEntity<Meal> createMeal(@RequestBody Meal meal) {
        // TODO: Add input validation (e.g., @Valid) in the future
        // TODO: Check if preparedBy user exists before saving
        if (meal.getPreparedBy() != null && meal.getPreparedBy().getId() != null) {
            Optional<User> user = userRepository.findById(meal.getPreparedBy().getId());
            if (user.isEmpty()) {
                return ResponseEntity.status(HttpStatus.BAD_REQUEST).build();
            }
            meal.setPreparedBy(user.get());
        } else {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).build();
        }

        Meal savedMeal = mealRepository.save(meal);
        return ResponseEntity.status(HttpStatus.CREATED).body(savedMeal);
    }

    // Update meal by ID - NOTE: No validation or partial update handling yet
    @PutMapping("/{id}")
    public ResponseEntity<Meal> updateMeal(@PathVariable Long id, @RequestBody Meal updatedMeal) {
        Optional<Meal> optionalMeal = mealRepository.findById(id);
        if (optionalMeal.isEmpty()) {
            return ResponseEntity.notFound().build();
        }
        Meal meal = optionalMeal.get();

        meal.setName(updatedMeal.getName());
        meal.setDescription(updatedMeal.getDescription());
        meal.setFrozen(updatedMeal.isFrozen());
        meal.setDate(updatedMeal.getDate());
        meal.setType(updatedMeal.getType());

        if (updatedMeal.getPreparedBy() != null && updatedMeal.getPreparedBy().getId() != null) {
            Optional<User> user = userRepository.findById(updatedMeal.getPreparedBy().getId());
            if (user.isEmpty()) {
                return ResponseEntity.status(HttpStatus.BAD_REQUEST).build();
            }
            meal.setPreparedBy(user.get());
        }

        Meal savedMeal = mealRepository.save(meal);
        return ResponseEntity.ok(savedMeal);
    }

    // Delete meal by ID
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteMeal(@PathVariable Long id) {
        Optional<Meal> meal = mealRepository.findById(id);
        if (meal.isEmpty()) {
            return ResponseEntity.notFound().build();
        }
        mealRepository.delete(meal.get());
        return ResponseEntity.noContent().build();
    }
}
