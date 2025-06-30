package com.teambanana.mealsonwheels.dto;

import com.teambanana.mealsonwheels.Enum.RoleType;
import com.teambanana.mealsonwheels.model.User;
import lombok.Data;

import java.util.Set;

@Data
public class VolunteerRegistrationDto {
    private String fullName;
    private String email;
    private String password;
    private String phone;
    private String address;
    private Set<RoleType> roles; // e.g. VOLUNTEER, COOK, RIDER, KITCHEN_STAFF

    public User toUser() {
        User user = new User();
        user.setFullName(fullName);
        user.setEmail(email);
        user.setPassword(password);
        user.setPhone(phone);
        user.setAddress(address);
        return user;
    }
}
