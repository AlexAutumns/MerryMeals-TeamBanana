package com.teambanana.mealsonwheels.model;

import jakarta.persistence.*;
import lombok.*;
import java.time.LocalDateTime;

@Entity
@Table(name = "audit_logs")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class AuditLog {
    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String action;
    private String entity;
    private String details;
    private LocalDateTime timestamp;

    @ManyToOne
    @JoinColumn(name = "performed_by_id")
    private User performedBy;
}
