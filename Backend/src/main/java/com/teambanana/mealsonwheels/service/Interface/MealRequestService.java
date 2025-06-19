package com.teambanana.mealsonwheels.service.Interface;

import com.teambanana.mealsonwheels.model.MealRequest;
import java.util.List;
import java.util.Optional;

public interface MealRequestService {
    MealRequest createMealRequest(MealRequest mealRequest); // TODO: Add DTO
    List<MealRequest> getAllMealRequests();
    Optional<MealRequest> getMealRequestById(Long id);
    MealRequest updateMealRequest(Long id, MealRequest updatedRequest); // TODO: Use DTO
    void deleteMealRequest(Long id);
}
