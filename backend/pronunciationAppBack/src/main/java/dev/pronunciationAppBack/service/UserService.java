package dev.pronunciationAppBack.service;

import dev.pronunciationAppBack.model.User;

import java.time.LocalDate;
import java.util.List;
import java.util.Optional;
import java.util.UUID;


public interface UserService {

    List<User> getAllUsers();
    User createUser(User user);
    User getUserById(String id);
    User updateUser(String id, User userDetails);
    boolean deleteUser(String id);
    long countUsers();
    // Adding new methods for complex queries
    List<User> getActiveUsers();
    List<User> getUsersCreatedAtAfter(LocalDate date);
    List<User> getUserNameContains(String username);
    List<User> getUserEmailContains(String email);
    List<User> getActiveUsersCreatedAfter(LocalDate date);
    Optional<User> getUserByEmail(String email);
    Optional<User> getUserByUserName(String userName);
}
