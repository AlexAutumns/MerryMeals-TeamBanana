package com.teambanana.mealsonwheels.repository;

import com.teambanana.mealsonwheels.Enum.MealTag;
import com.teambanana.mealsonwheels.Enum.MealType;
import com.teambanana.mealsonwheels.model.Meal;
import com.teambanana.mealsonwheels.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.time.LocalDate;
import java.util.List;

@Repository
public interface MealRepository extends JpaRepository<Meal, Long> {

    List<Meal> findByFrozen(boolean frozen);

    List<Meal> findByType(MealType type);

    List<Meal> findByPreparedBy(User preparedBy);

    List<Meal> findByPreparationDate(LocalDate preparationDate);

    List<Meal> findByPreparationDateBetween(LocalDate startDate, LocalDate endDate);

    List<Meal> findByNameContainingIgnoreCase(String keyword);

    List<Meal> findByDescriptionContainingIgnoreCase(String keyword);

    // Find meals that have a specific tag in their tags set
    @Query("SELECT m FROM Meal m JOIN m.tags t WHERE t = :tag")
    List<Meal> findByTag(@Param("tag") MealTag tag);
}
