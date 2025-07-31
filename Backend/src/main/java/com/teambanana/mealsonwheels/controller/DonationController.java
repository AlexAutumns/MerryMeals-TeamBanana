package com.teambanana.mealsonwheels.controller;

import java.time.LocalDate;
import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.server.ResponseStatusException;

import com.teambanana.mealsonwheels.Enum.DonationMethod;
import com.teambanana.mealsonwheels.model.Donation;
import com.teambanana.mealsonwheels.model.User;
import com.teambanana.mealsonwheels.repository.DonationRepository;
import com.teambanana.mealsonwheels.repository.UserRepository;

import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping("/api/donations")
@RequiredArgsConstructor
public class DonationController {

    private final DonationRepository donationRepository;
    private final UserRepository userRepository;

    @GetMapping
    public ResponseEntity<List<Donation>> getAllDonations() {
        return ResponseEntity.ok(donationRepository.findAll());
    }

    @GetMapping("/by-donor/{donorId}")
    public ResponseEntity<List<Donation>> getDonationsByDonor(@PathVariable Long donorId) {
        User donor = userRepository.findById(donorId)
                .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND, "Donor not found"));
        return ResponseEntity.ok(donationRepository.findByDonor(donor));
    }

    @GetMapping("/by-donor/{donorId}/ordered")
    public ResponseEntity<List<Donation>> getDonationsByDonorOrdered(@PathVariable Long donorId) {
        User donor = userRepository.findById(donorId)
                .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND, "Donor not found"));
        return ResponseEntity.ok(donationRepository.findByDonorOrderByDateDesc(donor));
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

    @PostMapping
    public ResponseEntity<Donation> createDonation(@RequestBody Donation donation) {
        // Accepts name, email, phone, amount, method
        // Optionally set date if not provided
        if (donation.getDate() == null) {
            donation.setDate(java.time.LocalDate.now());
        }
        return new ResponseEntity<>(donationRepository.save(donation), HttpStatus.CREATED);
    }
}
