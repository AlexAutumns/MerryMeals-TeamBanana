package com.teambanana.mealsonwheels.repository;

import com.teambanana.mealsonwheels.Enum.MealType;
import com.teambanana.mealsonwheels.model.Meal;
import com.teambanana.mealsonwheels.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.time.LocalDate;
import java.util.List;

@Repository
public interface MealRepository extends JpaRepository<Meal, Long> {

    // Find meals by frozen status
    List<Meal> findByFrozen(boolean frozen);

    // Find meals by meal type
    List<Meal> findByType(MealType type);

    // Find meals prepared by a specific user
    List<Meal> findByPreparedBy(User preparedBy);

    // Find meals by preparation date
    List<Meal> findByPreparationDate(LocalDate preparationDate);

    // Find meals between two preparation dates (inclusive)
    List<Meal> findByPreparationDateBetween(LocalDate startDate, LocalDate endDate);

    // Find meals by name containing a keyword (case insensitive)
    List<Meal> findByNameContainingIgnoreCase(String keyword);

    // Find meals by description containing a keyword (case insensitive)
    List<Meal> findByDescriptionContainingIgnoreCase(String keyword);
}
