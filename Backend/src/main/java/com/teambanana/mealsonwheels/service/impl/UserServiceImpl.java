package com.teambanana.mealsonwheels.service.impl;

import com.teambanana.mealsonwheels.Enum.RoleType;
import com.teambanana.mealsonwheels.model.Role;
import com.teambanana.mealsonwheels.repository.RoleRepository;
import com.teambanana.mealsonwheels.model.User;
import com.teambanana.mealsonwheels.repository.UserRepository;
import com.teambanana.mealsonwheels.security.UserPrincipal;
import com.teambanana.mealsonwheels.service.Interface.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.Set;

@Service
@RequiredArgsConstructor
public class UserServiceImpl implements UserService, UserDetailsService {

    private final UserRepository userRepository;
    private final RoleRepository roleRepository;
    private final PasswordEncoder passwordEncoder;

    @Override
    public UserDetails loadUserByUsername(String email) throws UsernameNotFoundException {
        User user = userRepository.findByEmail(email)
                .orElseThrow(() -> new UsernameNotFoundException("User not found with email: " + email));
        return new UserPrincipal(user);
    }

    @Override
    public User registerUser(User user) {
        user.setPassword(passwordEncoder.encode(user.getPassword()));
        Role memberRole = roleRepository.findByName(RoleType.MEMBER)
                .orElseThrow(() -> new RuntimeException("MEMBER role not found"));
        user.getRoles().add(memberRole);
        return userRepository.save(user);
    }

    @Override
    public User registerWithRoles(User user, Set<RoleType> roleTypes) {
        user.setPassword(passwordEncoder.encode(user.getPassword()));
        for (RoleType roleType : roleTypes) {
            Role role = roleRepository.findByName(roleType)
                    .orElseThrow(() -> new RuntimeException("Role not found: " + roleType));
            user.addRole(role);
        }
        return userRepository.save(user);
    }


    @Override
    public List<User> getAllUsers() {
        return userRepository.findAll();
    }

    @Override
    public Optional<User> getUserById(Long id) {
        return userRepository.findById(id);
    }

    @Override
    public User updateUser(Long id, User updatedUser) {
        return userRepository.findById(id)
                .map(user -> {
                    user.setEmail(updatedUser.getEmail());
                    user.setFullName(updatedUser.getFullName());
                    user.setPhone(updatedUser.getPhone());
                    // Only encode password if updatedUser has a non-null and non-empty password
                    if (updatedUser.getPassword() != null && !updatedUser.getPassword().isEmpty()) {
                        user.setPassword(passwordEncoder.encode(updatedUser.getPassword()));
                    }
                    return userRepository.save(user);
                })
                .orElseThrow(() -> new RuntimeException("User not found with id " + id));
    }

    @Override
    public void deleteUser(Long id) {
        userRepository.deleteById(id);
    }
}
