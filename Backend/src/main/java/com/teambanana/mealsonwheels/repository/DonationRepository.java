package com.teambanana.mealsonwheels.repository;

import java.time.LocalDate;
import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.teambanana.mealsonwheels.Enum.DonationMethod;
import com.teambanana.mealsonwheels.model.Donation;

@Repository
public interface DonationRepository extends JpaRepository<Donation, Long> {
    List<Donation> findByMethod(DonationMethod method);
    List<Donation> findByDate(LocalDate date);
    List<Donation> findByFullNameContainingIgnoreCase(String name);
    List<Donation> findByEmailContainingIgnoreCase(String email);
    List<Donation> findByAnonymousTrue();
}