package com.teambanana.mealsonwheels.service.impl;

import com.teambanana.mealsonwheels.model.Reassessment;
import com.teambanana.mealsonwheels.repository.ReassessmentRepository;
import com.teambanana.mealsonwheels.service.Interface.ReassessmentService;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ReassessmentServiceImpl implements ReassessmentService {

    private final ReassessmentRepository reassessmentRepository;

    public ReassessmentServiceImpl(ReassessmentRepository reassessmentRepository) {
        this.reassessmentRepository = reassessmentRepository;
    }

    @Override
    public Reassessment scheduleReassessment(Reassessment reassessment) {
        return reassessmentRepository.save(reassessment); // TODO: Use DTO
    }

    @Override
    public List<Reassessment> getAllReassessments() {
        return reassessmentRepository.findAll();
    }

    @Override
    public Optional<Reassessment> getReassessmentById(Long id) {
        return reassessmentRepository.findById(id);
    }

    @Override
    public Reassessment updateReassessment(Long id, Reassessment updated) {
        return reassessmentRepository.findById(id)
                .map(r -> {
                    r.setMember(updated.getMember());
                    r.setOfficer(updated.getOfficer());
                    r.setDate(updated.getDate());
                    r.setSummary(updated.getSummary());
                    r.setEligible(updated.isEligible());
                    // TODO: Use DTO and add field validation in the future
                    return reassessmentRepository.save(r);
                }).orElseThrow(() -> new RuntimeException("Reassessment not found with id " + id));
    }


    @Override
    public void deleteReassessment(Long id) {
        reassessmentRepository.deleteById(id);
    }
}
