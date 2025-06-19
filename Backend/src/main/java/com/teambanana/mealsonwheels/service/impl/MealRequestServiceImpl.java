package com.teambanana.mealsonwheels.service.impl;

import com.teambanana.mealsonwheels.model.MealRequest;
import com.teambanana.mealsonwheels.repository.MealRequestRepository;
import com.teambanana.mealsonwheels.repository.MealRepository;
import com.teambanana.mealsonwheels.service.Interface.MealRequestService;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class MealRequestServiceImpl implements MealRequestService {

    private final MealRequestRepository mealRequestRepository;
    private final MealRepository mealRepository;

    public MealRequestServiceImpl(MealRequestRepository mealRequestRepository, MealRepository mealRepository) {
        this.mealRequestRepository = mealRequestRepository;
        this.mealRepository = mealRepository;
    }

    @Override
    public MealRequest createMealRequest(MealRequest mealRequest) {
        // TODO: Validate Meal/User exist if set
        return mealRequestRepository.save(mealRequest);
    }

    @Override
    public List<MealRequest> getAllMealRequests() {
        return mealRequestRepository.findAll();
    }

    @Override
    public Optional<MealRequest> getMealRequestById(Long id) {
        return mealRequestRepository.findById(id);
    }

    @Override
    public MealRequest updateMealRequest(Long id, MealRequest updatedRequest) {
        return mealRequestRepository.findById(id)
                .map(existing -> {
                    existing.setUser(updatedRequest.getUser());
                    existing.setRequestDate(updatedRequest.getRequestDate());
                    existing.setStatus(updatedRequest.getStatus());
                    existing.setDietaryPreferences(updatedRequest.getDietaryPreferences());
                    existing.setWeekendSupport(updatedRequest.isWeekendSupport());
                    existing.setDeliveryAddress(updatedRequest.getDeliveryAddress());

                    if (updatedRequest.getMeal() != null && updatedRequest.getMeal().getId() != null) {
                        mealRepository.findById(updatedRequest.getMeal().getId())
                                .ifPresent(existing::setMeal);
                    }

                    return mealRequestRepository.save(existing);
                }).orElseThrow(() -> new RuntimeException("MealRequest not found with id " + id));
    }

    @Override
    public void deleteMealRequest(Long id) {
        mealRequestRepository.deleteById(id);
    }
}
