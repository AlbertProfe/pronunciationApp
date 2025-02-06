package dev.pronunciationAppBack.service;

import dev.pronunciationAppBack.model.User;

import java.util.List;
import java.util.UUID;


public interface UserService {

    List<User> getAllUsers();
    User createUser(User user);
    User getUserById(String id);
    User updateUser(String id, User userDetails);
    boolean deleteUser(String id);
    long countUsers();
}
