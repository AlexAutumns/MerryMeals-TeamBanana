package com.teambanana.mealsonwheels.repository;

import com.teambanana.mealsonwheels.model.AuditLog;
import com.teambanana.mealsonwheels.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface AuditLogRepository extends JpaRepository<AuditLog, Long> {

    // Find all audit logs performed by a specific user
    List<AuditLog> findByPerformedBy(User performedBy);

    // Optional: Find audit logs by entity type (e.g. "MealRequest", "User", etc.)
    List<AuditLog> findByEntity(String entity);

    // Optional: Find by action type (e.g. "CREATE", "UPDATE", etc.)
    List<AuditLog> findByAction(String action);
}
