package com.teambanana.mealsonwheels.controller;

import com.teambanana.mealsonwheels.model.Meal;
import com.teambanana.mealsonwheels.model.User;
import com.teambanana.mealsonwheels.repository.MealRepository;
import com.teambanana.mealsonwheels.repository.UserRepository;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

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

    @GetMapping
    public List<Meal> getAllMeals() {
        return mealRepository.findAll();
    }

    @GetMapping("/{id}")
    public ResponseEntity<Meal> getMealById(@PathVariable Long id) {
        Optional<Meal> meal = mealRepository.findById(id);
        return meal.map(ResponseEntity::ok)
                .orElseGet(() -> ResponseEntity.notFound().build());
    }

    @PostMapping
    public ResponseEntity<Meal> createMeal(@RequestBody Meal meal) {
        if (meal.getPreparedBy() == null || meal.getPreparedBy().getId() == null) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(null);
        }
        Optional<User> user = userRepository.findById(meal.getPreparedBy().getId());
        if (user.isEmpty()) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(null);
        }
        meal.setPreparedBy(user.get());

        // Optional: Validate required fields like price, type, frozen here before saving.

        Meal savedMeal = mealRepository.save(meal);
        return ResponseEntity.status(HttpStatus.CREATED).body(savedMeal);
    }

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
        meal.setPreparationDate(updatedMeal.getPreparationDate());
        meal.setCalories(updatedMeal.getCalories());
        meal.setType(updatedMeal.getType());
        meal.setPrice(updatedMeal.getPrice());
        meal.setTags(updatedMeal.getTags());

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
