package com.teambanana.mealsonwheels.service.Interface;

import com.teambanana.mealsonwheels.model.Feedback;
import java.util.List;
import java.util.Optional;

public interface FeedbackService {
    Feedback submitFeedback(Feedback feedback); // TODO: Add DTO + validation
    List<Feedback> getAllFeedback();
    Optional<Feedback> getFeedbackById(Long id);
    void deleteFeedback(Long id);
}
