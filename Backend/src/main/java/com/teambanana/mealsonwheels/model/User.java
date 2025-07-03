package com.teambanana.mealsonwheels.model;

import jakarta.persistence.*;
import lombok.*;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

@Entity
@Table(name = "users")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    // TODO: Add @NotBlank and @Size(min=2) for validation
    private String fullName;

    // TODO: Add @Email and @NotBlank for validation
    // TODO: Ensure email uniqueness at DB and app level
    private String email;

    // TODO: Add @NotBlank and @Size(min=8) for password validation
    // TODO: Use @JsonIgnore to hide password from serialization
    // TODO: Password hashing should be applied during registration/update
    private String password;

    // TODO: Add @Pattern for phone number format validation (optional)
    private String phone;

    // TODO: Add @NotBlank for address validation (optional)
    private String address;

    @ManyToMany(fetch = FetchType.EAGER)
    @JoinTable(
            name = "user_roles",
            joinColumns = @JoinColumn(name = "user_id"),
            inverseJoinColumns = @JoinColumn(name = "role_id")
    )
    private Set<Role> roles = new HashSet<>();

    @OneToMany(mappedBy = "user")
    private List<MealRequest> mealRequests;

    @OneToMany(mappedBy = "recipient", cascade = CascadeType.ALL, fetch = FetchType.LAZY)
    private List<Notification> notifications;

    @OneToMany(mappedBy = "performedBy")
    private List<AuditLog> auditLogs;

    @OneToMany(mappedBy = "user")
    private List<Feedback> feedbacks;

    @OneToMany(mappedBy = "volunteer")
    private List<VolunteerSchedule> schedules;

    @OneToMany(mappedBy = "submittedBy")
    private List<SupportTicket> tickets;

    public void addRole(Role role) {
        this.roles.add(role);
    }

    public void removeRole(Role role) {
        this.roles.remove(role);
    }
}
