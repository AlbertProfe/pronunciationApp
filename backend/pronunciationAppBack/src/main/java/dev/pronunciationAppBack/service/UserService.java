package dev.pronunciationAppBack.service;

import dev.pronunciationAppBack.model.User;

import java.util.List;
import java.util.UUID;


public interface UserService {

    List<User> getAllUsers();
    User createUser(User user);
    User getUserById(UUID id);
    User updateUser(UUID id, User userDetails);
    boolean deleteUser(UUID id);
    long countUsers();
}
