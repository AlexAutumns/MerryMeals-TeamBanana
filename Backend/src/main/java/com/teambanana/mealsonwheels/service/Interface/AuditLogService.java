package com.teambanana.mealsonwheels.service.Interface;

import com.teambanana.mealsonwheels.model.AuditLog;
import java.util.List;
import java.util.Optional;

public interface AuditLogService {
    AuditLog createLog(AuditLog log); // TODO: Add DTO
    List<AuditLog> getAllLogs();
    Optional<AuditLog> getLogById(Long id);
    void deleteLog(Long id);
}
