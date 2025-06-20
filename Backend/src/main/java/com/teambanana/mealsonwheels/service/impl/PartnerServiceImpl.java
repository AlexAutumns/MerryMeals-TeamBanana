package com.teambanana.mealsonwheels.service.impl;

import com.teambanana.mealsonwheels.model.Partner;
import com.teambanana.mealsonwheels.repository.PartnerRepository;
import com.teambanana.mealsonwheels.service.Interface.PartnerService;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class PartnerServiceImpl implements PartnerService {

    private final PartnerRepository partnerRepository;

    public PartnerServiceImpl(PartnerRepository partnerRepository) {
        this.partnerRepository = partnerRepository;
    }

    @Override
    public Partner registerPartner(Partner partner) {
        return partnerRepository.save(partner); // TODO: Use DTO + validation
    }

    @Override
    public List<Partner> getAllPartners() {
        return partnerRepository.findAll();
    }

    @Override
    public Optional<Partner> getPartnerById(Long id) {
        return partnerRepository.findById(id);
    }

    @Override
    public Partner updatePartner(Long id, Partner updatedPartner) {
        return partnerRepository.findById(id)
                .map(partner -> {
                    partner.setName(updatedPartner.getName());
                    partner.setType(updatedPartner.getType());
                    partner.setContactInfo(updatedPartner.getContactInfo());
                    partner.setEmail(updatedPartner.getEmail());
                    return partnerRepository.save(partner);
                }).orElseThrow(() -> new RuntimeException("Partner not found with id " + id));
    }

    @Override
    public void deletePartner(Long id) {
        partnerRepository.deleteById(id);
    }
}
