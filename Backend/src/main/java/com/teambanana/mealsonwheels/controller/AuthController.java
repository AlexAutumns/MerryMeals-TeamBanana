package com.teambanana.mealsonwheels.controller;

import com.teambanana.mealsonwheels.dto.LoginRequestDto;
import com.teambanana.mealsonwheels.dto.LoginResponseDto;
import com.teambanana.mealsonwheels.security.JwtUtil;
import com.teambanana.mealsonwheels.security.UserPrincipal;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.*;
import java.util.List;


@RestController
@RequestMapping("/api/auth")
@RequiredArgsConstructor
public class AuthController {

    private final AuthenticationManager authenticationManager;
    private final JwtUtil jwtUtil;

    @PostMapping("/login")
    public ResponseEntity<LoginResponseDto> login(@RequestBody LoginRequestDto request) {
        Authentication authentication = authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(request.getEmail(), request.getPassword()));

        UserPrincipal userPrincipal = (UserPrincipal) authentication.getPrincipal();
        String token = jwtUtil.generateToken(userPrincipal);

        List<String> roles = userPrincipal.getAuthorities().stream()
                .map(Object::toString)
                .toList();

        return ResponseEntity.ok(new LoginResponseDto(token, roles));
    }
}
