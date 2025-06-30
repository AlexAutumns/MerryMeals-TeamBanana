package com.teambanana.mealsonwheels.controller;

import com.teambanana.mealsonwheels.model.Notification;
import com.teambanana.mealsonwheels.model.User;
import com.teambanana.mealsonwheels.repository.NotificationRepository;
import com.teambanana.mealsonwheels.repository.UserRepository;

import org.springframework.http.ResponseEntity;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/notifications")
public class NotificationController {

    private final NotificationRepository notificationRepository;
    private final UserRepository userRepository;

    public NotificationController(NotificationRepository notificationRepository, UserRepository userRepository) {
        this.notificationRepository = notificationRepository;
        this.userRepository = userRepository;
    }

    // Get all notifications
    @GetMapping
    public List<Notification> getAllNotifications() {
        return notificationRepository.findAll();
    }

    // Get notification by ID
    @GetMapping("/{id}")
    public ResponseEntity<Notification> getNotificationById(@PathVariable Long id) {
        Optional<Notification> notification = notificationRepository.findById(id);
        return notification.map(ResponseEntity::ok)
                .orElseGet(() -> ResponseEntity.notFound().build());
    }

    // Get all notifications for a specific user
    @GetMapping("/recipient/{userId}")
    public ResponseEntity<List<Notification>> getNotificationsByRecipient(@PathVariable Long userId) {
        Optional<User> user = userRepository.findById(userId);
        if (user.isEmpty()) {
            return ResponseEntity.badRequest().build();
        }
        List<Notification> notifications = notificationRepository.findByRecipient(user.get());
        return ResponseEntity.ok(notifications);
    }

    // Create a new notification
    @PostMapping
    public ResponseEntity<Notification> createNotification(@RequestBody Notification notification) {
        // TODO: Add validation (@Valid) and DTO mapping later

        if (notification.getRecipient() == null || notification.getRecipient().getId() == null) {
            return ResponseEntity.badRequest().build();
        }

        Optional<User> user = userRepository.findById(notification.getRecipient().getId());
        if (user.isEmpty()) {
            return ResponseEntity.badRequest().build();
        }
        notification.setRecipient(user.get());

        Notification saved = notificationRepository.save(notification);
        return ResponseEntity.status(HttpStatus.CREATED).body(saved);
    }

    // Update notification (e.g., mark as read)
    @PutMapping("/{id}")
    public ResponseEntity<Notification> updateNotification(@PathVariable Long id, @RequestBody Notification updatedNotification) {
        Optional<Notification> optionalNotification = notificationRepository.findById(id);
        if (optionalNotification.isEmpty()) {
            return ResponseEntity.notFound().build();
        }
        Notification notification = optionalNotification.get();

        notification.setMessage(updatedNotification.getMessage());
        notification.setType(updatedNotification.getType());
        notification.setRead(updatedNotification.getRead());
        notification.setSentAt(updatedNotification.getSentAt());

        // Update recipient if provided and valid
        if (updatedNotification.getRecipient() != null && updatedNotification.getRecipient().getId() != null) {
            Optional<User> user = userRepository.findById(updatedNotification.getRecipient().getId());
            if (user.isEmpty()) {
                return ResponseEntity.badRequest().build();
            }
            notification.setRecipient(user.get());
        }

        Notification saved = notificationRepository.save(notification);
        return ResponseEntity.ok(saved);
    }

    // Delete notification by ID
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteNotification(@PathVariable Long id) {
        Optional<Notification> notification = notificationRepository.findById(id);
        if (notification.isEmpty()) {
            return ResponseEntity.notFound().build();
        }
        notificationRepository.delete(notification.get());
        return ResponseEntity.noContent().build();
    }
}
