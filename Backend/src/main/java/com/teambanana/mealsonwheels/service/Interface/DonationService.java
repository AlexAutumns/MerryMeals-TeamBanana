package com.teambanana.mealsonwheels.service.Interface;

import com.teambanana.mealsonwheels.model.Donation;
import java.util.List;
import java.util.Optional;

public interface DonationService {
    Donation createDonation(Donation donation); // TODO: Add DTO
    List<Donation> getAllDonations();
    Optional<Donation> getDonationById(Long id);
    Donation updateDonation(Long id, Donation updatedDonation); // TODO: Use DTO
    void deleteDonation(Long id);
}
