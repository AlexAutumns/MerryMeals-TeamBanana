package com.teambanana.mealsonwheels.repository;

import com.teambanana.mealsonwheels.Enum.PartnerType;
import com.teambanana.mealsonwheels.model.Partner;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface PartnerRepository extends JpaRepository<Partner, Long> {

    // Find partners by their type
    List<Partner> findByType(PartnerType type);

    // Find partners by name containing a keyword (case insensitive)
    List<Partner> findByNameContainingIgnoreCase(String keyword);

    // Find partners by contact info containing a keyword (case insensitive)
    List<Partner> findByContactInfoContainingIgnoreCase(String keyword);

    // Find partners by email
    List<Partner> findByEmailContainingIgnoreCase(String keyword);
}
