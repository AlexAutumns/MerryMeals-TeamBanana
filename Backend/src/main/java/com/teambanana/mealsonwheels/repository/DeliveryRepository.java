package com.teambanana.mealsonwheels.repository;

import com.teambanana.mealsonwheels.model.Delivery;
import com.teambanana.mealsonwheels.model.User;
import com.teambanana.mealsonwheels.model.MealRequest;
import com.teambanana.mealsonwheels.Enum.DeliveryStatus;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.time.LocalDate;
import java.util.List;

@Repository
public interface DeliveryRepository extends JpaRepository<Delivery, Long> {

    // Find deliveries assigned to a specific rider
    List<Delivery> findByRider(User rider);

    // Find deliveries for a specific meal request
    List<Delivery> findByMealRequest(MealRequest mealRequest);

    // Find deliveries by status
    List<Delivery> findByStatus(DeliveryStatus status);

    // Find deliveries scheduled on a specific date
    List<Delivery> findByDeliveryDate(LocalDate deliveryDate);
}
