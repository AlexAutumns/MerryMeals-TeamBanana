package com.teambanana.mealsonwheels.controller;

import com.teambanana.mealsonwheels.Enum.RoleType;
import com.teambanana.mealsonwheels.model.User;
import com.teambanana.mealsonwheels.service.Interface.UserService;
import com.teambanana.mealsonwheels.dto.VolunteerRegistrationDto;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashSet;
import java.util.Set;

@RestController
@RequestMapping("/api/register")
@RequiredArgsConstructor
public class RegistrationController {

    private final UserService userService;

    @PostMapping("/member")
    public ResponseEntity<User> registerMember(@RequestBody User user) {
        User registeredUser = userService.registerWithRoles(user, Set.of(RoleType.MEMBER));
        return ResponseEntity.ok(registeredUser);
    }

    @PostMapping("/caregiver")
    public ResponseEntity<User> registerCaregiver(@RequestBody User user) {
        User registeredUser = userService.registerWithRoles(user, Set.of(RoleType.CAREGIVER));
        return ResponseEntity.ok(registeredUser);
    }

    @PostMapping("/volunteer")
    public ResponseEntity<User> registerVolunteer(@RequestBody VolunteerRegistrationDto dto) {
        User user = dto.toUser();

        Set<RoleType> roles = new HashSet<>(dto.getRoles()); // ensure mutable
        roles.add(RoleType.VOLUNTEER);

        User registeredUser = userService.registerWithRoles(user, roles);
        return ResponseEntity.ok(registeredUser);
    }


    @PostMapping("/donor")
    public ResponseEntity<User> registerDonor(@RequestBody User user) {
        User registeredUser = userService.registerWithRoles(user, Set.of(RoleType.DONOR));
        return ResponseEntity.ok(registeredUser);
    }

    @PostMapping("/supporter")
    public ResponseEntity<User> registerSupporter(@RequestBody User user) {
        User registeredUser = userService.registerWithRoles(user, Set.of(RoleType.SUPPORTER));
        return ResponseEntity.ok(registeredUser);
    }

    @PostMapping("/partner")
    public ResponseEntity<User> registerPartner(@RequestBody User user) {
        User registeredUser = userService.registerWithRoles(user, Set.of(RoleType.PARTNER));
        return ResponseEntity.ok(registeredUser);
    }
}
