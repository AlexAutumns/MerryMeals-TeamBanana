package com.teambanana.mealsonwheels.repository;

import com.teambanana.mealsonwheels.model.Inspection;
import com.teambanana.mealsonwheels.model.Partner;
import com.teambanana.mealsonwheels.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.List;

@Repository
public interface InspectionRepository extends JpaRepository<Inspection, Long> {

    // Get inspections by partner
    List<Inspection> findByPartner(Partner partner);

    // Get inspections conducted by a specific inspector
    List<Inspection> findByInspector(User inspector);

    // Get inspections conducted on a specific date
    List<Inspection> findByDate(LocalDate date);

    // Find inspections created between start and end timestamps
    List<Inspection> findByCreatedAtBetween(LocalDateTime start, LocalDateTime end);
}
