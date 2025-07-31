package com.teambanana.mealsonwheels.config;

import com.teambanana.mealsonwheels.Enum.RoleType;
import com.teambanana.mealsonwheels.model.Role;
import com.teambanana.mealsonwheels.repository.RoleRepository;
import org.springframework.boot.ApplicationRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class StartupConfig {

    @Bean
    public ApplicationRunner seedRoles(RoleRepository roleRepository) {
        return args -> {
            for (RoleType roleType : RoleType.values()) {
                roleRepository.findByName(roleType).orElseGet(() -> {
                    Role role = new Role();
                    role.setName(roleType);
                    return roleRepository.save(role);
                });
            }
            System.out.println("✅ Role seeding complete.");
        };
    }
}
