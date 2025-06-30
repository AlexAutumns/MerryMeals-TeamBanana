package com.teambanana.mealsonwheels.repository;

import com.teambanana.mealsonwheels.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface UserRepository extends JpaRepository<User, Long> {

    // Find user by email (commonly used for authentication)
    Optional<User> findByEmail(String email);

    // Check if a user exists by email (useful for registration)
    boolean existsByEmail(String email);

    // TODO: Consider adding pagination and filtering methods for user management
}