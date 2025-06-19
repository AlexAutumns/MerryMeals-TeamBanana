package com.teambanana.mealsonwheels.controller;

import com.teambanana.mealsonwheels.model.AuditLog;
import com.teambanana.mealsonwheels.model.User;
import com.teambanana.mealsonwheels.repository.AuditLogRepository;
import com.teambanana.mealsonwheels.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/audit-logs")
@RequiredArgsConstructor
public class AuditLogController {

    private final AuditLogRepository auditLogRepository;
    private final UserRepository userRepository;

    @GetMapping
    public List<AuditLog> getAllLogs() {
        return auditLogRepository.findAll();
    }

    @GetMapping("/by-user/{userId}")
    public List<AuditLog> getLogsByUser(@PathVariable Long userId) {
        User user = userRepository.findById(userId)
                .orElseThrow(() -> new IllegalArgumentException("User not found with ID: " + userId));
        return auditLogRepository.findByPerformedBy(user);
    }

    @GetMapping("/by-entity/{entity}")
    public List<AuditLog> getLogsByEntity(@PathVariable String entity) {
        return auditLogRepository.findByEntity(entity);
    }

    @GetMapping("/by-action/{action}")
    public List<AuditLog> getLogsByAction(@PathVariable String action) {
        return auditLogRepository.findByAction(action);
    }
}
