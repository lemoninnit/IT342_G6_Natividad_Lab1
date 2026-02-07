package com.example.natividad.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.natividad.model.User;

public interface UserRepository extends JpaRepository<User, Long> {
    Optional<User> findByEmail(String email); // For login check
}