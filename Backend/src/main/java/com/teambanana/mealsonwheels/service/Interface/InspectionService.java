package com.teambanana.mealsonwheels.service.Interface;

import com.teambanana.mealsonwheels.model.Inspection;
import java.util.List;
import java.util.Optional;

public interface InspectionService {
    Inspection recordInspection(Inspection inspection); // TODO: Add DTO
    List<Inspection> getAllInspections();
    Optional<Inspection> getInspectionById(Long id);
    Inspection updateInspection(Long id, Inspection updatedInspection); // TODO: Use DTO
    void deleteInspection(Long id);
}
