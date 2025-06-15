package com.teambanana.mealsonwheels.model;

import jakarta.persistence.*;
import lombok.*;
import java.time.LocalDate;
import com.teambanana.mealsonwheels.Enum.*;

@Entity
@Table(name = "support_tickets")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class SupportTicket {
    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String subject;
    private String message;

    @Enumerated(EnumType.STRING)
    private SupportTicketStatus status;

    private LocalDate createdDate;

    @ManyToOne
    @JoinColumn(name = "submitted_by_id")
    private User submittedBy;
}
