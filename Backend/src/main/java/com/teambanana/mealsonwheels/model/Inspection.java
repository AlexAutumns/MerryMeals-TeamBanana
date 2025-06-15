package com.teambanana.mealsonwheels.model;

import jakarta.persistence.*;
import lombok.*;
import java.time.LocalDate;
import com.teambanana.mealsonwheels.Enum.*;

@Entity
@Table(name = "inspections")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class Inspection {
    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private LocalDate date;

    @Enumerated(EnumType.STRING)
    private InspectionResult result;

    private String notes;

    @ManyToOne
    @JoinColumn(name = "partner_id")
    private Partner partner;

    @ManyToOne
    @JoinColumn(name = "inspector_id")
    private User inspector;
}
