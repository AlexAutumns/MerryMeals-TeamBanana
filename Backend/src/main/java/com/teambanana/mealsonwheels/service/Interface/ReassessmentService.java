package com.teambanana.mealsonwheels.service.Interface;

import com.teambanana.mealsonwheels.model.Reassessment;
import java.util.List;
import java.util.Optional;

public interface ReassessmentService {
    Reassessment scheduleReassessment(Reassessment reassessment); // TODO: Add DTO
    List<Reassessment> getAllReassessments();
    Optional<Reassessment> getReassessmentById(Long id);
    Reassessment updateReassessment(Long id, Reassessment updated); // TODO: Use DTO
    void deleteReassessment(Long id);
}
