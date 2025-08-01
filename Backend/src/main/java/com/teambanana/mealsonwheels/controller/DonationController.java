package com.teambanana.mealsonwheels.controller;

import java.time.LocalDate;
import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;

import com.teambanana.mealsonwheels.Enum.DonationMethod;
import com.teambanana.mealsonwheels.model.Donation;
import com.teambanana.mealsonwheels.repository.DonationRepository;

import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping("/api/donations")
@RequiredArgsConstructor
public class DonationController {

    private final DonationRepository donationRepository;

    @GetMapping
    public ResponseEntity<List<Donation>> getAllDonations() {
        return ResponseEntity.ok(donationRepository.findAll());
    }

    @GetMapping("/by-method/{method}")
    public ResponseEntity<List<Donation>> getDonationsByMethod(@PathVariable DonationMethod method) {
        return ResponseEntity.ok(donationRepository.findByMethod(method));
    }

    @GetMapping("/by-date/{date}")
    public ResponseEntity<List<Donation>> getDonationsByDate(@PathVariable String date) {
        try {
            LocalDate parsedDate = LocalDate.parse(date);
            return ResponseEntity.ok(donationRepository.findByDate(parsedDate));
        } catch (Exception e) {
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "Invalid date format. Use YYYY-MM-DD.");
        }
    }

    @GetMapping("/by-name/{name}")
    public ResponseEntity<List<Donation>> getDonationsByFullName(@PathVariable String name) {
        return ResponseEntity.ok(donationRepository.findByFullNameContainingIgnoreCase(name));
    }

    @GetMapping("/by-email/{email}")
    public ResponseEntity<List<Donation>> getDonationsByEmail(@PathVariable String email) {
        return ResponseEntity.ok(donationRepository.findByEmailContainingIgnoreCase(email));
    }

    @GetMapping("/anonymous")
    public ResponseEntity<List<Donation>> getAnonymousDonations() {
        return ResponseEntity.ok(donationRepository.findByAnonymousTrue());
    }

    @PostMapping
    public ResponseEntity<Donation> createDonation(@RequestBody Donation donation) {
        if (donation.getDate() == null) {
            donation.setDate(LocalDate.now());
        }
        return new ResponseEntity<>(donationRepository.save(donation), HttpStatus.CREATED);
    }
}