package com.teambanana.mealsonwheels.repository;

import com.teambanana.mealsonwheels.model.Notification;
import com.teambanana.mealsonwheels.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.time.LocalDateTime;
import java.util.List;

@Repository
public interface NotificationRepository extends JpaRepository<Notification, Long> {

    // Find all notifications for a specific recipient
    List<Notification> findByRecipient(User recipient);

    // Find unread notifications for a recipient
    List<Notification> findByRecipientAndReadFalse(User recipient);

    // Find notifications by type for a recipient
    List<Notification> findByRecipientAndType(User recipient, String type);

    // Find notifications sent after a certain date/time
    List<Notification> findBySentAtAfter(LocalDateTime sentAt);

    // Find notifications sent before a certain date/time
    List<Notification> findBySentAtBefore(LocalDateTime sentAt);
}
