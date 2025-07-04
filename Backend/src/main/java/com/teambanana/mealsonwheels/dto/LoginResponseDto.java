package com.teambanana.mealsonwheels.dto;

import lombok.AllArgsConstructor;
import lombok.Data;

import java.util.List;

@Data
@AllArgsConstructor
public class LoginResponseDto {
    private String token;
    private List<String> roles;
    private String fullName;
    private String email;
}
