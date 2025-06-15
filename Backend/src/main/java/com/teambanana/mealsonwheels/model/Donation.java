package com.teambanana.mealsonwheels.model;

import jakarta.persistence.*;
import lombok.*;
import java.time.LocalDate;
import com.teambanana.mealsonwheels.Enum.*;

@Entity
@Table(name = "donations")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class Donation {
    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private Double amount;

    @Enumerated(EnumType.STRING)
    private DonationMethod method;

    private LocalDate date;

    @ManyToOne
    @JoinColumn(name = "donor_id")
    private User donor;
}
