package com.teambanana.mealsonwheels.controller;

import com.teambanana.mealsonwheels.model.Reassessment;
import com.teambanana.mealsonwheels.repository.ReassessmentRepository;

import org.springframework.http.ResponseEntity;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/reassessments")
public class ReassessmentController {

    private final ReassessmentRepository reassessmentRepository;

    public ReassessmentController(ReassessmentRepository reassessmentRepository) {
        this.reassessmentRepository = reassessmentRepository;
    }

    // Get all reassessments
    @GetMapping
    public List<Reassessment> getAllReassessments() {
        return reassessmentRepository.findAll();
    }

    // Get reassessment by ID
    @GetMapping("/{id}")
    public ResponseEntity<Reassessment> getReassessmentById(@PathVariable Long id) {
        Optional<Reassessment> reassessment = reassessmentRepository.findById(id);
        return reassessment.map(ResponseEntity::ok)
                .orElseGet(() -> ResponseEntity.notFound().build());
    }

    // Create a new reassessment
    @PostMapping
    public ResponseEntity<Reassessment> createReassessment(@RequestBody /* TODO: Replace with ReassessmentDTO and add @Valid */ Reassessment reassessment) {
        // TODO: Add validation here using DTO and @Valid annotation
        Reassessment saved = reassessmentRepository.save(reassessment);
        return ResponseEntity.status(HttpStatus.CREATED).body(saved);
    }

    // Update an existing reassessment
    @PutMapping("/{id}")
    public ResponseEntity<Reassessment> updateReassessment(@PathVariable Long id,
                                                           @RequestBody /* TODO: Replace with ReassessmentDTO and add @Valid */ Reassessment updatedReassessment) {
        // TODO: Add validation here using DTO and @Valid annotation
        Optional<Reassessment> optionalReassessment = reassessmentRepository.findById(id);
        if (optionalReassessment.isEmpty()) {
            return ResponseEntity.notFound().build();
        }

        Reassessment reassessment = optionalReassessment.get();
        reassessment.setMember(updatedReassessment.getMember());
        reassessment.setOfficer(updatedReassessment.getOfficer());
        reassessment.setDate(updatedReassessment.getDate());
        reassessment.setSummary(updatedReassessment.getSummary());
        reassessment.setEligible(updatedReassessment.isEligible());

        Reassessment saved = reassessmentRepository.save(reassessment);
        return ResponseEntity.ok(saved);
    }

    // Delete a reassessment
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteReassessment(@PathVariable Long id) {
        Optional<Reassessment> reassessment = reassessmentRepository.findById(id);
        if (reassessment.isEmpty()) {
            return ResponseEntity.notFound().build();
        }

        reassessmentRepository.delete(reassessment.get());
        return ResponseEntity.noContent().build();
    }
}
