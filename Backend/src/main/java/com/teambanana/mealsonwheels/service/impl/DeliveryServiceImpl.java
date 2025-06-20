package com.teambanana.mealsonwheels.service.impl;

import com.teambanana.mealsonwheels.model.Delivery;
import com.teambanana.mealsonwheels.repository.DeliveryRepository;
import com.teambanana.mealsonwheels.service.Interface.DeliveryService;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class DeliveryServiceImpl implements DeliveryService {

    private final DeliveryRepository deliveryRepository;

    public DeliveryServiceImpl(DeliveryRepository deliveryRepository) {
        this.deliveryRepository = deliveryRepository;
    }

    @Override
    public Delivery createDelivery(Delivery delivery) {
        return deliveryRepository.save(delivery); // TODO: Use DTO
    }

    @Override
    public List<Delivery> getAllDeliveries() {
        return deliveryRepository.findAll();
    }

    @Override
    public Optional<Delivery> getDeliveryById(Long id) {
        return deliveryRepository.findById(id);
    }

    @Override
    public Delivery updateDelivery(Long id, Delivery updatedDelivery) {
        return deliveryRepository.findById(id)
                .map(delivery -> {
                    delivery.setDeliveryDate(updatedDelivery.getDeliveryDate());
                    delivery.setStatus(updatedDelivery.getStatus());
                    delivery.setRider(updatedDelivery.getRider());
                    delivery.setMealRequest(updatedDelivery.getMealRequest()); // optional
                    delivery.setRecipientAddress(updatedDelivery.getRecipientAddress());
                    delivery.setNotes(updatedDelivery.getNotes());
                    // TODO: Use DTO + validation
                    return deliveryRepository.save(delivery);
                }).orElseThrow(() -> new RuntimeException("Delivery not found with id " + id));
    }

    @Override
    public void deleteDelivery(Long id) {
        deliveryRepository.deleteById(id);
    }
}
