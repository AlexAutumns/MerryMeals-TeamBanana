package com.teambanana.mealsonwheels.controller;

import com.teambanana.mealsonwheels.Enum.MealRequestStatus;
import com.teambanana.mealsonwheels.model.MealRequest;
import com.teambanana.mealsonwheels.model.User;
import com.teambanana.mealsonwheels.model.Meal;
import com.teambanana.mealsonwheels.repository.MealRequestRepository;
import com.teambanana.mealsonwheels.repository.UserRepository;
import com.teambanana.mealsonwheels.repository.MealRepository;

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
    private final MealRepository mealRepository;

    public MealRequestController(MealRequestRepository mealRequestRepository, UserRepository userRepository, MealRepository mealRepository) {
        this.mealRequestRepository = mealRequestRepository;
        this.userRepository = userRepository;
        this.mealRepository = mealRepository;
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

    @PostMapping
    public ResponseEntity<MealRequest> createMealRequest(@RequestBody MealRequest mealRequest) {
        if (mealRequest.getUser() == null || mealRequest.getUser().getId() == null) {
            return ResponseEntity.badRequest().build();
        }

        Optional<User> user = userRepository.findById(mealRequest.getUser().getId());
        if (user.isEmpty()) return ResponseEntity.badRequest().build();
        mealRequest.setUser(user.get());

        // ✅ Validate and set Meal if provided
        if (mealRequest.getMeal() != null && mealRequest.getMeal().getId() != null) {
            Optional<Meal> meal = mealRepository.findById(mealRequest.getMeal().getId());
            if (meal.isEmpty()) return ResponseEntity.badRequest().build();
            mealRequest.setMeal(meal.get());
        }

        MealRequest saved = mealRequestRepository.save(mealRequest);
        return ResponseEntity.status(HttpStatus.CREATED).body(saved);
    }

    @PutMapping("/{id}")
    public ResponseEntity<MealRequest> updateMealRequest(@PathVariable Long id, @RequestBody MealRequest updated) {
        Optional<MealRequest> optional = mealRequestRepository.findById(id);
        if (optional.isEmpty()) return ResponseEntity.notFound().build();

        MealRequest mealRequest = optional.get();

        mealRequest.setDietaryPreferences(updated.getDietaryPreferences());
        mealRequest.setWeekendSupport(updated.isWeekendSupport());
        mealRequest.setRequestDate(updated.getRequestDate());
        mealRequest.setStatus(updated.getStatus());
        mealRequest.setDeliveryAddress(updated.getDeliveryAddress());

        if (updated.getUser() != null && updated.getUser().getId() != null) {
            userRepository.findById(updated.getUser().getId())
                    .ifPresent(mealRequest::setUser);
        }

        if (updated.getMeal() != null && updated.getMeal().getId() != null) {
            mealRepository.findById(updated.getMeal().getId())
                    .ifPresent(mealRequest::setMeal);
        }

        MealRequest saved = mealRequestRepository.save(mealRequest);
        return ResponseEntity.ok(saved);
    }

}
