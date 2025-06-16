package com.teambanana.mealsonwheels.repository;

import com.teambanana.mealsonwheels.model.Role;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface RoleRepository extends JpaRepository<Role, Long> {

    // Find a role by its unique name
    Optional<Role> findByName(String name);
}
