package com.teambanana.mealsonwheels.service.impl;

import com.teambanana.mealsonwheels.model.Donation;
import com.teambanana.mealsonwheels.repository.DonationRepository;
import com.teambanana.mealsonwheels.service.Interface.DonationService;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class DonationServiceImpl implements DonationService {

    private final DonationRepository donationRepository;

    public DonationServiceImpl(DonationRepository donationRepository) {
        this.donationRepository = donationRepository;
    }

    @Override
    public Donation createDonation(Donation donation) {
        return donationRepository.save(donation);
    }

    @Override
    public List<Donation> getAllDonations() {
        return donationRepository.findAll();
    }

    @Override
    public Optional<Donation> getDonationById(Long id) {
        return donationRepository.findById(id);
    }

    @Override
    public Donation updateDonation(Long id, Donation updatedDonation) {
        return donationRepository.findById(id)
                .map(donation -> {
                    donation.setAmount(updatedDonation.getAmount());
                    donation.setDate(updatedDonation.getDate());
                    donation.setMethod(updatedDonation.getMethod());
                    donation.setFullName(updatedDonation.getFullName());
                    donation.setEmail(updatedDonation.getEmail());
                    donation.setPhone(updatedDonation.getPhone());
                    donation.setAddress(updatedDonation.getAddress());
                    donation.setAnonymous(updatedDonation.getAnonymous());
                    return donationRepository.save(donation);
                }).orElseThrow(() -> new RuntimeException("Donation not found with id " + id));
    }

    @Override
    public void deleteDonation(Long id) {
        donationRepository.deleteById(id);
    }
}
