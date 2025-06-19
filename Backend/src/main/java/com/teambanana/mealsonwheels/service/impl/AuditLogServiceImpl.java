package com.teambanana.mealsonwheels.service.impl;

import com.teambanana.mealsonwheels.model.AuditLog;
import com.teambanana.mealsonwheels.repository.AuditLogRepository;
import com.teambanana.mealsonwheels.service.Interface.AuditLogService;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class AuditLogServiceImpl implements AuditLogService {

    private final AuditLogRepository auditLogRepository;

    public AuditLogServiceImpl(AuditLogRepository auditLogRepository) {
        this.auditLogRepository = auditLogRepository;
    }

    @Override
    public AuditLog createLog(AuditLog log) {
        return auditLogRepository.save(log); // TODO: Use DTO
    }

    @Override
    public List<AuditLog> getAllLogs() {
        return auditLogRepository.findAll();
    }

    @Override
    public Optional<AuditLog> getLogById(Long id) {
        return auditLogRepository.findById(id);
    }

    @Override
    public void deleteLog(Long id) {
        auditLogRepository.deleteById(id);
    }
}
