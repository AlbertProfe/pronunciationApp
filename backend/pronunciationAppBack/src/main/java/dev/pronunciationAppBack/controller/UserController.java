package dev.pronunciationAppBack.controller;

import dev.pronunciationAppBack.model.User;
import dev.pronunciationAppBack.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/users")
public class UserController {

    @Autowired
    private UserService userService;

    @GetMapping("/hello")
    public String hello() {
        return "Hello Albert, this is a test";
    }

    @GetMapping
    public List<User> getAllUsers() {
        return userService.getAllUsers();
    }

    @GetMapping("/{id}")
    public User getUserById(@PathVariable String id) {
        Optional<User> user = userService.getUserById(id);

        if (user.isPresent()) {
            return user.get();
        } else {
            return null;
        }
    }

    @PostMapping("/createUser")
    public User createUser(@RequestBody User user) {
        return userService.createUser(user);
    }

    @PutMapping("/{id}")
    public User updateUser(@PathVariable String id, @RequestBody User user) {
        if (!userService.existsById(id)) {
            return null;
        }

        user.setId(id);
        return userService.updateUser(user);
    }

    @DeleteMapping("/{id}")
    public String deleteUser(@PathVariable String id) {
        if (userService.existsById(id)) {
            userService.deleteUser(id);
            return "User deleted";
        } else {
            return "User not found";
        }
    }

    @DeleteMapping
    public String deleteAllUsers() {
        userService.deleteAllUsers();
        return "All users deleted";
    }
}
