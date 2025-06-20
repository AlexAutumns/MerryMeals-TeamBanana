package com.teambanana.mealsonwheels.service.Interface;

import com.teambanana.mealsonwheels.model.Delivery;
import java.util.List;
import java.util.Optional;

public interface DeliveryService {
    Delivery createDelivery(Delivery delivery); // TODO: Add DTO
    List<Delivery> getAllDeliveries();
    Optional<Delivery> getDeliveryById(Long id);
    Delivery updateDelivery(Long id, Delivery updatedDelivery); // TODO: Use DTO
    void deleteDelivery(Long id);
}
