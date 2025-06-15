package com.teambanana.mealsonwheels.model;

import jakarta.persistence.*;
import lombok.*;
import java.time.LocalDate;

@Entity
@Table(name = "reassessments")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class Reassessment {
    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne
    @JoinColumn(name = "member_id")
    private User member;

    @ManyToOne
    @JoinColumn(name = "officer_id")
    private User officer;

    private LocalDate date;

    private String summary;

    private boolean eligible;
}
