package com.teambanana.mealsonwheels.service.impl;

import com.teambanana.mealsonwheels.model.Feedback;
import com.teambanana.mealsonwheels.repository.FeedbackRepository;
import com.teambanana.mealsonwheels.service.Interface.FeedbackService;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class FeedbackServiceImpl implements FeedbackService {

    private final FeedbackRepository feedbackRepository;

    public FeedbackServiceImpl(FeedbackRepository feedbackRepository) {
        this.feedbackRepository = feedbackRepository;
    }

    @Override
    public Feedback submitFeedback(Feedback feedback) {
        return feedbackRepository.save(feedback); // TODO: Use DTO + validation
    }

    @Override
    public List<Feedback> getAllFeedback() {
        return feedbackRepository.findAll();
    }

    @Override
    public Optional<Feedback> getFeedbackById(Long id) {
        return feedbackRepository.findById(id);
    }

    @Override
    public void deleteFeedback(Long id) {
        feedbackRepository.deleteById(id);
    }
}
