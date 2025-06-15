package com.teambanana.mealsonwheels.model;

import jakarta.persistence.*;
import lombok.*;
import java.time.LocalDate;

@Entity
@Table(name = "volunteer_schedules")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class VolunteerSchedule {
    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private LocalDate availableDate;
    private String shift;

    @ManyToOne
    @JoinColumn(name = "volunteer_id")
    private User volunteer;
}
