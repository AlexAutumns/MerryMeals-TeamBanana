package com.teambanana.mealsonwheels.repository;

import com.teambanana.mealsonwheels.Enum.MealRequestStatus;
import com.teambanana.mealsonwheels.model.MealRequest;
import com.teambanana.mealsonwheels.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.time.LocalDate;
import java.util.List;

@Repository
public interface MealRequestRepository extends JpaRepository<MealRequest, Long> {

    // Find all requests by a specific user
    List<MealRequest> findByUser(User user);

    // Find requests by status
    List<MealRequest> findByStatus(MealRequestStatus status);

    // Find requests by weekend support flag
    List<MealRequest> findByWeekendSupport(boolean weekendSupport);

    // Find requests by request date
    List<MealRequest> findByRequestDate(LocalDate requestDate);

    // Find requests between two dates (inclusive)
    List<MealRequest> findByRequestDateBetween(LocalDate startDate, LocalDate endDate);

    // Find requests by delivery address containing a keyword (case insensitive)
    List<MealRequest> findByDeliveryAddressContainingIgnoreCase(String keyword);
}
