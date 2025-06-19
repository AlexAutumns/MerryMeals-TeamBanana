package com.teambanana.mealsonwheels.service.Interface;

import com.teambanana.mealsonwheels.model.User;
import java.util.List;
import java.util.Optional;

public interface UserService {
    User registerUser(User user); // TODO: Add DTO and validation annotations
    List<User> getAllUsers();
    Optional<User> getUserById(Long id);
    User updateUser(Long id, User updatedUser); // TODO: Use DTO
    void deleteUser(Long id);
}
