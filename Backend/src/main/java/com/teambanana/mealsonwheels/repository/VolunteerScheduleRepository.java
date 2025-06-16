package com.teambanana.mealsonwheels.repository;

import com.teambanana.mealsonwheels.model.User;
import com.teambanana.mealsonwheels.model.VolunteerSchedule;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.time.LocalDate;
import java.util.List;

@Repository
public interface VolunteerScheduleRepository extends JpaRepository<VolunteerSchedule, Long> {

    // Find schedules by volunteer
    List<VolunteerSchedule> findByVolunteer(User volunteer);

    // Find schedules by available date
    List<VolunteerSchedule> findByAvailableDate(LocalDate availableDate);

    // Find schedules by shift (e.g., "morning", "afternoon")
    List<VolunteerSchedule> findByShift(String shift);

    // Find schedules by volunteer and available date
    List<VolunteerSchedule> findByVolunteerAndAvailableDate(User volunteer, LocalDate availableDate);
}
