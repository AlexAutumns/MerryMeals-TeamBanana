package com.teambanana.mealsonwheels.model;

import jakarta.persistence.*;
import lombok.*;
import java.util.List;
import com.teambanana.mealsonwheels.Enum.*;

@Entity
@Table(name = "partners")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class Partner {
    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name;

    @Enumerated(EnumType.STRING)
    private PartnerType type;

    private String contactInfo;

    @OneToMany(mappedBy = "partner")
    private List<Inspection> inspections;
}
