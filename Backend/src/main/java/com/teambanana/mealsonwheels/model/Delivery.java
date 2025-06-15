package com.teambanana.mealsonwheels.model;

import jakarta.persistence.*;
import lombok.*;
import java.time.LocalDate;
import com.teambanana.mealsonwheels.Enum.*;

@Entity
@Table(name = "deliveries")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class Delivery {
    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private LocalDate deliveryDate;

    @Enumerated(EnumType.STRING)
    private DeliveryStatus status;

    private String recipientAddress;
    private String notes;

    @ManyToOne
    @JoinColumn(name = "rider_id")
    private User rider;

    @ManyToOne
    @JoinColumn(name = "meal_request_id")
    private MealRequest mealRequest;
}
