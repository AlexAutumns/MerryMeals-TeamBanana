package com.teambanana.mealsonwheels.model;

import com.teambanana.mealsonwheels.Enum.MealTag;
import com.teambanana.mealsonwheels.Enum.MealType;
import jakarta.persistence.*;
import lombok.*;

import java.math.BigDecimal;
import java.time.LocalDate;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

@Entity
@Table(name = "meals")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class Meal {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private String name;

    @Column(length = 1000)
    private String description;

    private LocalDate preparationDate;

    private int calories;

    private boolean frozen;

    @Enumerated(EnumType.STRING)
    @Column(nullable = false)
    private MealType type;

    @ElementCollection(targetClass = MealTag.class)
    @Enumerated(EnumType.STRING)
    @CollectionTable(name = "meal_tags", joinColumns = @JoinColumn(name = "meal_id"))
    @Column(name = "tag")
    private Set<MealTag> tags = new HashSet<>();

    @Column(nullable = false)
    private BigDecimal price;

    @ManyToOne
    @JoinColumn(name = "prepared_by_id")
    private User preparedBy;

    @OneToMany(mappedBy = "meal", cascade = CascadeType.ALL, orphanRemoval = true)
    private List<Feedback> feedbacks;
}
