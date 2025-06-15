package com.teambanana.mealsonwheels.model;

import jakarta.persistence.*;
import lombok.*;
import java.time.LocalDate;
import java.util.List;
import com.teambanana.mealsonwheels.Enum.*;

@Entity
@Table(name = "meals")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class Meal {
    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name;
    private String description;
    private boolean frozen;
    private LocalDate date;

    @Enumerated(EnumType.STRING)
    private MealType type;

    @ManyToOne
    @JoinColumn(name = "prepared_by_id")
    private User preparedBy;

    @OneToMany(mappedBy = "meal")
    private List<Feedback> feedbacks;
}
