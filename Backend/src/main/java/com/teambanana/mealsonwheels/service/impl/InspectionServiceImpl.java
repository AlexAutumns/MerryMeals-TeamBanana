package com.teambanana.mealsonwheels.service.impl;

import com.teambanana.mealsonwheels.model.Inspection;
import com.teambanana.mealsonwheels.repository.InspectionRepository;
import com.teambanana.mealsonwheels.service.Interface.InspectionService;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class InspectionServiceImpl implements InspectionService {

    private final InspectionRepository inspectionRepository;

    public InspectionServiceImpl(InspectionRepository inspectionRepository) {
        this.inspectionRepository = inspectionRepository;
    }

    @Override
    public Inspection recordInspection(Inspection inspection) {
        return inspectionRepository.save(inspection); // TODO: Use DTO + validation
    }

    @Override
    public List<Inspection> getAllInspections() {
        return inspectionRepository.findAll();
    }

    @Override
    public Optional<Inspection> getInspectionById(Long id) {
        return inspectionRepository.findById(id);
    }

    @Override
    public Inspection updateInspection(Long id, Inspection updatedInspection) {
        return inspectionRepository.findById(id)
                .map(inspection -> {
                    inspection.setInspector(updatedInspection.getInspector());
                    inspection.setDate(updatedInspection.getDate());
                    inspection.setResult(updatedInspection.getResult());
                    inspection.setNotes(updatedInspection.getNotes());
                    inspection.setPartner(updatedInspection.getPartner());
                    return inspectionRepository.save(inspection);
                }).orElseThrow(() -> new RuntimeException("Inspection not found with id " + id));
    }

    @Override
    public void deleteInspection(Long id) {
        inspectionRepository.deleteById(id);
    }
}
