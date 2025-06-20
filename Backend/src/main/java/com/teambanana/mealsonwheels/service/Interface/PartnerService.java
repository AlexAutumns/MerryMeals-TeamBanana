package com.teambanana.mealsonwheels.service.Interface;

import com.teambanana.mealsonwheels.model.Partner;
import java.util.List;
import java.util.Optional;

public interface PartnerService {
    Partner registerPartner(Partner partner); // TODO: Add DTO + validation
    List<Partner> getAllPartners();
    Optional<Partner> getPartnerById(Long id);
    Partner updatePartner(Long id, Partner updatedPartner); // TODO: Use DTO
    void deletePartner(Long id);
}
