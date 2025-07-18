package com.teambanana.mealsonwheels.repository;

import com.teambanana.mealsonwheels.model.Role;
import com.teambanana.mealsonwheels.Enum.RoleType;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface RoleRepository extends JpaRepository<Role, Long> {
    Optional<Role> findByName(RoleType name);
}
