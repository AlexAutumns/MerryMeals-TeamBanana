package com.teambanana.mealsonwheels.repository;

import com.teambanana.mealsonwheels.model.Feedback;
import com.teambanana.mealsonwheels.model.User;
import com.teambanana.mealsonwheels.model.Meal;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface FeedbackRepository extends JpaRepository<Feedback, Long> {

    // Get all feedback submitted by a specific user
    List<Feedback> findByUser(User user);

    // Get all feedback for a specific meal
    List<Feedback> findByMeal(Meal meal);

    // Get feedback with rating greater than or equal to
    List<Feedback> findByRatingGreaterThanEqual(int rating);
}
