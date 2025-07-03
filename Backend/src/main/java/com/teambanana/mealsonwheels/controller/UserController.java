package com.teambanana.mealsonwheels.controller;

import com.teambanana.mealsonwheels.model.User;
import com.teambanana.mealsonwheels.security.UserPrincipal;
import com.teambanana.mealsonwheels.service.Interface.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/users")
@RequiredArgsConstructor
public class UserController {

    private final UserService userService;

    @GetMapping
    @PreAuthorize("hasRole('ADMIN') or hasRole('ADMIN_STAFF')")
    public List<User> getAllUsers() {
        return userService.getAllUsers();
    }

    @GetMapping("/{id}")
    public ResponseEntity<User> getUserById(@PathVariable Long id, Authentication authentication) {
        UserPrincipal currentUser = (UserPrincipal) authentication.getPrincipal();

        if (currentUser.getId().equals(id) ||
                hasAdminAccess(currentUser)) {
            return userService.getUserById(id)
                    .map(ResponseEntity::ok)
                    .orElseGet(() -> ResponseEntity.notFound().build());
        }

        return ResponseEntity.status(403).build();
    }

    @PutMapping("/{id}")
    public ResponseEntity<User> updateUser(@PathVariable Long id,
                                           @RequestBody User userDetails,
                                           Authentication authentication) {
        UserPrincipal currentUser = (UserPrincipal) authentication.getPrincipal();

        if (currentUser.getId().equals(id) || hasAdminAccess(currentUser)) {
            try {
                User updatedUser = userService.updateUser(id, userDetails);
                return ResponseEntity.ok(updatedUser);
            } catch (RuntimeException e) {
                return ResponseEntity.notFound().build();
            }
        }

        return ResponseEntity.status(403).build();
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteUser(@PathVariable Long id,
                                           Authentication authentication) {
        UserPrincipal currentUser = (UserPrincipal) authentication.getPrincipal();

        if (currentUser.getId().equals(id) || hasAdminAccess(currentUser)) {
            userService.deleteUser(id);
            return ResponseEntity.noContent().build();
        }

        return ResponseEntity.status(403).build();
    }

    private boolean hasAdminAccess(UserPrincipal userPrincipal) {
        return userPrincipal.getAuthorities().stream().anyMatch(
                auth -> auth.getAuthority().equals("ROLE_ADMIN") || auth.getAuthority().equals("ROLE_ADMIN_STAFF")
        );
    }
}
