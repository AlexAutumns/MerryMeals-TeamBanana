package com.teambanana.mealsonwheels.service.Interface;

import com.teambanana.mealsonwheels.model.User;
import com.teambanana.mealsonwheels.Enum.RoleType;

import java.util.List;
import java.util.Optional;
import java.util.Set;

public interface UserService {
    User registerUser(User user);
    User registerWithRoles(User user, Set<RoleType> roles);
    List<User> getAllUsers();
    Optional<User> getUserById(Long id);
    User updateUser(Long id, User updatedUser);
    void deleteUser(Long id);
}
