package com.teambanana.mealsonwheels.model;

import jakarta.persistence.*;
import lombok.*;
import java.time.LocalDateTime;

@Entity
@Table(name = "notifications")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class Notification {
    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String message;
    private String type;
    private boolean read;
    private LocalDateTime sentAt;

    @ManyToOne
    @JoinColumn(name = "recipient_id")
    private User recipient;
}
