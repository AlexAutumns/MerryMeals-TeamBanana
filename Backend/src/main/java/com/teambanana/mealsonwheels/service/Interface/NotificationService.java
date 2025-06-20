package com.teambanana.mealsonwheels.service.Interface;

import com.teambanana.mealsonwheels.model.Notification;
import java.util.List;
import java.util.Optional;

public interface NotificationService {
    Notification sendNotification(Notification notification); // TODO: Add DTO
    List<Notification> getAllNotifications();
    Optional<Notification> getNotificationById(Long id);
    void deleteNotification(Long id);
}
