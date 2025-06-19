package com.teambanana.mealsonwheels.controller;

import com.teambanana.mealsonwheels.model.Delivery;
import com.teambanana.mealsonwheels.model.MealRequest;
import com.teambanana.mealsonwheels.model.User;
import com.teambanana.mealsonwheels.Enum.DeliveryStatus;
import com.teambanana.mealsonwheels.repository.DeliveryRepository;
import com.teambanana.mealsonwheels.repository.MealRequestRepository;
import com.teambanana.mealsonwheels.repository.UserRepository;

import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.http.HttpStatus;
import org.springframework.web.server.ResponseStatusException;

import java.time.LocalDate;
import java.util.List;

@RestController
@RequestMapping("/api/deliveries")
@RequiredArgsConstructor
public class DeliveryController {

    private final DeliveryRepository deliveryRepository;
    private final UserRepository userRepository;
    private final MealRequestRepository mealRequestRepository;

    @GetMapping
    public ResponseEntity<List<Delivery>> getAllDeliveries() {
        return ResponseEntity.ok(deliveryRepository.findAll());
    }

    @GetMapping("/by-rider/{riderId}")
    public ResponseEntity<List<Delivery>> getDeliveriesByRider(@PathVariable Long riderId) {
        User rider = userRepository.findById(riderId)
                .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND, "Rider not found"));
        return ResponseEntity.ok(deliveryRepository.findByRider(rider));
    }

    @GetMapping("/by-meal-request/{mealRequestId}")
    public ResponseEntity<List<Delivery>> getDeliveriesByMealRequest(@PathVariable Long mealRequestId) {
        MealRequest request = mealRequestRepository.findById(mealRequestId)
                .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND, "Meal request not found"));
        return ResponseEntity.ok(deliveryRepository.findByMealRequest(request));
    }

    @GetMapping("/by-status/{status}")
    public ResponseEntity<List<Delivery>> getDeliveriesByStatus(@PathVariable DeliveryStatus status) {
        return ResponseEntity.ok(deliveryRepository.findByStatus(status));
    }

    @GetMapping("/by-date/{date}")
    public ResponseEntity<List<Delivery>> getDeliveriesByDate(@PathVariable String date) {
        try {
            LocalDate deliveryDate = LocalDate.parse(date);
            return ResponseEntity.ok(deliveryRepository.findByDeliveryDate(deliveryDate));
        } catch (Exception e) {
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "Invalid date format. Use YYYY-MM-DD.");
        }
    }

    @PatchMapping("/{id}/status")
    public ResponseEntity<Delivery> updateDeliveryStatus(@PathVariable Long id, @RequestParam DeliveryStatus status) {
        Delivery delivery = deliveryRepository.findById(id)
                .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND, "Delivery not found"));
        delivery.setStatus(status);
        return ResponseEntity.ok(deliveryRepository.save(delivery));
    }

    @PostMapping
    public ResponseEntity<Delivery> createDelivery(@RequestBody Delivery delivery) {
        // TODO: Add validation logic here
        return new ResponseEntity<>(deliveryRepository.save(delivery), HttpStatus.CREATED);
    }
}
