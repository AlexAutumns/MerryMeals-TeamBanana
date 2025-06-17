package com.teambanana.mealsonwheels.controller;

import com.teambanana.mealsonwheels.model.Inspection;
import com.teambanana.mealsonwheels.model.Partner;
import com.teambanana.mealsonwheels.model.User;
import com.teambanana.mealsonwheels.repository.InspectionRepository;
import com.teambanana.mealsonwheels.repository.PartnerRepository;
import com.teambanana.mealsonwheels.repository.UserRepository;

import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.http.HttpStatus;
import org.springframework.web.server.ResponseStatusException;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.time.format.DateTimeParseException;
import java.util.List;

@RestController
@RequestMapping("/api/inspections")
@RequiredArgsConstructor
public class InspectionController {

    private final InspectionRepository inspectionRepository;
    private final PartnerRepository partnerRepository;
    private final UserRepository userRepository;

    @GetMapping
    public ResponseEntity<List<Inspection>> getAllInspections() {
        return ResponseEntity.ok(inspectionRepository.findAll());
    }

    @GetMapping("/by-partner/{partnerId}")
    public ResponseEntity<List<Inspection>> getByPartner(@PathVariable Long partnerId) {
        Partner partner = partnerRepository.findById(partnerId)
                .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND, "Partner not found"));
        return ResponseEntity.ok(inspectionRepository.findByPartner(partner));
    }

    @GetMapping("/by-inspector/{inspectorId}")
    public ResponseEntity<List<Inspection>> getByInspector(@PathVariable Long inspectorId) {
        User inspector = userRepository.findById(inspectorId)
                .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND, "Inspector not found"));
        return ResponseEntity.ok(inspectionRepository.findByInspector(inspector));
    }

    @GetMapping("/by-date/{date}")
    public ResponseEntity<List<Inspection>> getByDate(@PathVariable String date) {
        LocalDate parsedDate;
        try {
            parsedDate = LocalDate.parse(date);
        } catch (DateTimeParseException e) {
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "Invalid date format. Use ISO yyyy-MM-dd");
        }
        return ResponseEntity.ok(inspectionRepository.findByDate(parsedDate));
    }

    // New endpoint: Get inspections created between two timestamps
    @GetMapping("/created-between")
    public ResponseEntity<List<Inspection>> getByCreatedBetween(
            @RequestParam String start,
            @RequestParam String end) {
        LocalDateTime startDateTime;
        LocalDateTime endDateTime;
        try {
            startDateTime = LocalDateTime.parse(start);
            endDateTime = LocalDateTime.parse(end);
        } catch (DateTimeParseException e) {
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "Invalid datetime format. Use ISO yyyy-MM-ddTHH:mm:ss");
        }
        if (startDateTime.isAfter(endDateTime)) {
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "Start datetime must be before end datetime");
        }
        return ResponseEntity.ok(inspectionRepository.findByCreatedAtBetween(startDateTime, endDateTime));
    }

    @PostMapping
    public ResponseEntity<Inspection> createInspection(@RequestBody Inspection inspection) {
        if (inspection.getPartner() == null || inspection.getPartner().getId() == null) {
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "Partner is required");
        }
        if (inspection.getInspector() == null || inspection.getInspector().getId() == null) {
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "Inspector is required");
        }

        Partner partner = partnerRepository.findById(inspection.getPartner().getId())
                .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND, "Partner not found"));

        User inspector = userRepository.findById(inspection.getInspector().getId())
                .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND, "Inspector not found"));

        inspection.setPartner(partner);
        inspection.setInspector(inspector);

        Inspection saved = inspectionRepository.save(inspection);
        return new ResponseEntity<>(saved, HttpStatus.CREATED);
    }
}
