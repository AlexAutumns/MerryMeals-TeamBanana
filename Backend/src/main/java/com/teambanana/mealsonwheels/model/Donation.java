package com.teambanana.mealsonwheels.model;

import java.math.BigDecimal;
import java.time.LocalDate;

import com.teambanana.mealsonwheels.Enum.DonationMethod;

import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Table(name = "donations")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class Donation {
    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private BigDecimal amount;

    @Enumerated(EnumType.STRING)
    private DonationMethod method;

    private LocalDate date;

    // New fields for direct donor info
    private String name;
    private String email;
    private String phone;
    private String country;

    @ManyToOne
    @JoinColumn(name = "donor_id")
    private User donor;
}
