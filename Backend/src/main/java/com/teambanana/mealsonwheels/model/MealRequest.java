package com.teambanana.mealsonwheels.model;

import jakarta.persistence.*;
import lombok.*;
import java.time.LocalDate;
import java.util.List;
import com.teambanana.mealsonwheels.Enum.*;

@Entity
@Table(name = "meal_requests")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class MealRequest {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne
    @JoinColumn(name = "user_id")
    private User user;

    private String dietaryPreferences;
    private boolean weekendSupport;
    private LocalDate requestDate;

    @Enumerated(EnumType.STRING)
    private MealRequestStatus status;

    private String deliveryAddress;

    @OneToMany(mappedBy = "mealRequest")
    private List<Delivery> deliveries;

    @ManyToOne
    @JoinColumn(name = "meal_id")
    private Meal meal;
}
