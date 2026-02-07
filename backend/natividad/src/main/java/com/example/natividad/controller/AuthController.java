package com.example.natividad.controller;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.natividad.model.User;
import com.example.natividad.repository.UserRepository;

@RestController
@RequestMapping("/api/auth")
@CrossOrigin(origins = "http://localhost:3000") // Allows React to talk to Spring Boot
public class AuthController {

    @Autowired
    private UserRepository userRepository;

    // REGISTER FEATURE
    @PostMapping("/register")
    public String register(@RequestBody User user) {
        if (userRepository.findByEmail(user.getEmail()).isPresent()) {
            return "Error: Email already exists!";
        }
        user.setRole("USER"); // Default role
        userRepository.save(user);
        return "Registration successful!";
    }

    // LOGIN FEATURE
    @PostMapping("/login")
    public String login(@RequestBody User loginRequest) {
        Optional<User> user = userRepository.findByEmail(loginRequest.getEmail());
        
        // Simple password check (Add BCrypt here later if you have time!)
        if (user.isPresent() && user.get().getPassword().equals(loginRequest.getPassword())) {
            return "Login successful!";
        }
        return "Invalid credentials";
    }
}