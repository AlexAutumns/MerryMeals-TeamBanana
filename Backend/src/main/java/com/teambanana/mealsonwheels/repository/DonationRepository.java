package com.teambanana.mealsonwheels.repository;

import java.time.LocalDate;
import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.teambanana.mealsonwheels.Enum.DonationMethod;
import com.teambanana.mealsonwheels.model.Donation;
import com.teambanana.mealsonwheels.model.User;

@Repository
public interface DonationRepository extends JpaRepository<Donation, Long> {

    // Find all donations by a specific donor
    List<Donation> findByDonor(User donor);

    // Find all donations made using a specific method
    List<Donation> findByMethod(DonationMethod method);

    // Find all donations made on a specific date
    List<Donation> findByDate(LocalDate date);

    // Sum donations by a specific donor
    List<Donation> findByDonorOrderByDateDesc(User donor);
}
