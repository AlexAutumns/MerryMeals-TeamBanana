package com.teambanana.mealsonwheels.service.Interface;

import com.teambanana.mealsonwheels.model.Role;
import java.util.List;
import java.util.Optional;

public interface RoleService {
    Role createRole(Role role); // TODO: Add DTO
    List<Role> getAllRoles();
    Optional<Role> getRoleById(Long id);
    void deleteRole(Long id);
}
