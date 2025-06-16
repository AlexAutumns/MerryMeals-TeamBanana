package com.teambanana.mealsonwheels.repository;

import com.teambanana.mealsonwheels.model.Reassessment;
import com.teambanana.mealsonwheels.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.time.LocalDate;
import java.util.List;

@Repository
public interface ReassessmentRepository extends JpaRepository<Reassessment, Long> {

    // Find reassessments for a specific member
    List<Reassessment> findByMember(User member);

    // Find reassessments conducted by a specific officer
    List<Reassessment> findByOfficer(User officer);

    // Find reassessments by date
    List<Reassessment> findByDate(LocalDate date);

    // Find reassessments between two dates
    List<Reassessment> findByDateBetween(LocalDate startDate, LocalDate endDate);

    // Find reassessments by eligibility status
    List<Reassessment> findByEligible(boolean eligible);
}
