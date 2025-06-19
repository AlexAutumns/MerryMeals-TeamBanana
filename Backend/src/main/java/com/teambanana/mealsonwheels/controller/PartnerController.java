package com.teambanana.mealsonwheels.controller;

import com.teambanana.mealsonwheels.model.Partner;
import com.teambanana.mealsonwheels.repository.PartnerRepository;

import org.springframework.http.ResponseEntity;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/partners")
public class PartnerController {

    private final PartnerRepository partnerRepository;

    public PartnerController(PartnerRepository partnerRepository) {
        this.partnerRepository = partnerRepository;
    }

    // Get all partners
    @GetMapping
    public List<Partner> getAllPartners() {
        return partnerRepository.findAll();
    }

    // Get partner by ID
    @GetMapping("/{id}")
    public ResponseEntity<Partner> getPartnerById(@PathVariable Long id) {
        Optional<Partner> partner = partnerRepository.findById(id);
        return partner.map(ResponseEntity::ok)
                .orElseGet(() -> ResponseEntity.notFound().build());
    }

    // Create new partner
    @PostMapping
    public ResponseEntity<Partner> createPartner(@RequestBody Partner partner) {
        // TODO: Add validation (@Valid) and use DTOs in the future
        Partner saved = partnerRepository.save(partner);
        return ResponseEntity.status(HttpStatus.CREATED).body(saved);
    }

    // Update existing partner
    @PutMapping("/{id}")
    public ResponseEntity<Partner> updatePartner(@PathVariable Long id, @RequestBody Partner updatedPartner) {
        Optional<Partner> optionalPartner = partnerRepository.findById(id);
        if (optionalPartner.isEmpty()) {
            return ResponseEntity.notFound().build();
        }

        Partner partner = optionalPartner.get();
        partner.setName(updatedPartner.getName());
        partner.setType(updatedPartner.getType());
        partner.setContactInfo(updatedPartner.getContactInfo());

        Partner saved = partnerRepository.save(partner);
        return ResponseEntity.ok(saved);
    }

    // Delete partner
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deletePartner(@PathVariable Long id) {
        Optional<Partner> partner = partnerRepository.findById(id);
        if (partner.isEmpty()) {
            return ResponseEntity.notFound().build();
        }

        partnerRepository.delete(partner.get());
        return ResponseEntity.noContent().build();
    }
}
