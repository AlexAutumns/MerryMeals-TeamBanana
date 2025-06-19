package com.teambanana.mealsonwheels.controller;

import com.teambanana.mealsonwheels.Enum.MealRequestStatus;
import com.teambanana.mealsonwheels.model.MealRequest;
import com.teambanana.mealsonwheels.model.User;
import com.teambanana.mealsonwheels.repository.MealRequestRepository;
import com.teambanana.mealsonwheels.repository.UserRepository;

import org.springframework.http.ResponseEntity;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDate;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/mealrequests")
public class MealRequestController {

    private final MealRequestRepository mealRequestRepository;
    private final UserRepository userRepository;

    public MealRequestController(MealRequestRepository mealRequestRepository, UserRepository userRepository) {
        this.mealRequestRepository = mealRequestRepository;
        this.userRepository = userRepository;
    }

    // Get all meal requests (no pagination/filtering yet)
    @GetMapping
    public List<MealRequest> getAllMealRequests() {
        return mealRequestRepository.findAll();
    }

    // Get meal request by ID
    @GetMapping("/{id}")
    public ResponseEntity<MealRequest> getMealRequestById(@PathVariable Long id) {
        Optional<MealRequest> mealRequest = mealRequestRepository.findById(id);
        return mealRequest.map(ResponseEntity::ok)
                .orElseGet(() -> ResponseEntity.notFound().build());
    }

    // Create a new meal request
    @PostMapping
    public ResponseEntity<MealRequest> createMealRequest(@RequestBody MealRequest mealRequest) {
        // TODO: Add input validation (e.g., @Valid) later
        // Validate User existence
        if (mealRequest.getUser() == null || mealRequest.getUser().getId() == null) {
            return ResponseEntity.badRequest().build();
        }
        Optional<User> user = userRepository.findById(mealRequest.getUser().getId());
        if (user.isEmpty()) {
            return ResponseEntity.badRequest().build();
        }
        mealRequest.setUser(user.get());

        MealRequest saved = mealRequestRepository.save(mealRequest);
        return ResponseEntity.status(HttpStatus.CREATED).body(saved);
    }

    // Update existing meal request
    @PutMapping("/{id}")
    public ResponseEntity<MealRequest> updateMealRequest(@PathVariable Long id, @RequestBody MealRequest updatedMealRequest) {
        Optional<MealRequest> optionalMealRequest = mealRequestRepository.findById(id);
        if (optionalMealRequest.isEmpty()) {
            return ResponseEntity.notFound().build();
        }
        MealRequest mealRequest = optionalMealRequest.get();

        mealRequest.setDietaryPreferences(updatedMealRequest.getDietaryPreferences());
        mealRequest.setWeekendSupport(updatedMealRequest.isWeekendSupport());
        mealRequest.setRequestDate(updatedMealRequest.getRequestDate());
        mealRequest.setStatus(updatedMealRequest.getStatus());
        mealRequest.setDeliveryAddress(updatedMealRequest.getDeliveryAddress());

        // Update user if provided and valid
        if (updatedMealRequest.getUser() != null && updatedMealRequest.getUser().getId() != null) {
            Optional<User> user = userRepository.findById(updatedMealRequest.getUser().getId());
            if (user.isEmpty()) {
                return ResponseEntity.badRequest().build();
            }
            mealRequest.setUser(user.get());
        }

        MealRequest saved = mealRequestRepository.save(mealRequest);
        return ResponseEntity.ok(saved);
    }

    // Delete meal request by ID
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteMealRequest(@PathVariable Long id) {
        Optional<MealRequest> mealRequest = mealRequestRepository.findById(id);
        if (mealRequest.isEmpty()) {
            return ResponseEntity.notFound().build();
        }
        mealRequestRepository.delete(mealRequest.get());
        return ResponseEntity.noContent().build();
    }
}
