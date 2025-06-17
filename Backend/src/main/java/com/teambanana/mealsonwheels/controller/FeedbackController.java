package com.teambanana.mealsonwheels.controller;

import com.teambanana.mealsonwheels.model.Feedback;
import com.teambanana.mealsonwheels.model.User;
import com.teambanana.mealsonwheels.model.Meal;
import com.teambanana.mealsonwheels.repository.FeedbackRepository;
import com.teambanana.mealsonwheels.repository.UserRepository;
import com.teambanana.mealsonwheels.repository.MealRepository;

import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.http.HttpStatus;
import org.springframework.web.server.ResponseStatusException;

import java.util.List;

@RestController
@RequestMapping("/api/feedbacks")
@RequiredArgsConstructor
public class FeedbackController {

    private final FeedbackRepository feedbackRepository;
    private final UserRepository userRepository;
    private final MealRepository mealRepository;

    @GetMapping
    public ResponseEntity<List<Feedback>> getAllFeedbacks() {
        return ResponseEntity.ok(feedbackRepository.findAll());
    }

    @GetMapping("/by-user/{userId}")
    public ResponseEntity<List<Feedback>> getFeedbacksByUser(@PathVariable Long userId) {
        User user = userRepository.findById(userId)
                .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND, "User not found"));
        return ResponseEntity.ok(feedbackRepository.findByUser(user));
    }

    @GetMapping("/by-meal/{mealId}")
    public ResponseEntity<List<Feedback>> getFeedbacksByMeal(@PathVariable Long mealId) {
        Meal meal = mealRepository.findById(mealId)
                .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND, "Meal not found"));
        return ResponseEntity.ok(feedbackRepository.findByMeal(meal));
    }

    @GetMapping("/rating-gte/{rating}")
    public ResponseEntity<List<Feedback>> getFeedbacksWithRatingGreaterThanEqual(@PathVariable int rating) {
        if (rating < 0 || rating > 5) {
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "Rating must be between 0 and 5");
        }
        return ResponseEntity.ok(feedbackRepository.findByRatingGreaterThanEqual(rating));
    }

    @PostMapping
    public ResponseEntity<Feedback> createFeedback(@RequestBody Feedback feedback) {
        // TODO: Add validation on rating or comments length
        return new ResponseEntity<>(feedbackRepository.save(feedback), HttpStatus.CREATED);
    }
}
