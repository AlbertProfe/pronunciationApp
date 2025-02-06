package dev.pronunciationAppBack.controller;

import dev.pronunciationAppBack.model.User;
import dev.pronunciationAppBack.repository.UserRepository;
import dev.pronunciationAppBack.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.http.HttpHeaders;

import java.util.Date;
import java.util.List;
import java.util.UUID;

@RequestMapping("/api/v1/users")
@RestController
public class UserController {

    @Value("${endpoint.url.users}")
    private String endpointUrlUsers;

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private UserService userService;

    @GetMapping("/show-endpoint")
    public String showEndPointUsers() {
        return "The Users endpoint URL is: " + endpointUrlUsers;
    }

    @GetMapping("/allUsers")
    public ResponseEntity<List<User>> getAllUsers() {
        List<User> users = userRepository.findAll();
        HttpHeaders headers = getCommonHeaders("Get all users");
        System.out.println("Number of users: " + users.size());
        if (users.isEmpty()) {
            return new ResponseEntity<>(headers, HttpStatus.NOT_FOUND);
        } else {
            return new ResponseEntity<>(users, headers, HttpStatus.OK);
        }
    }

    @PostMapping
    public ResponseEntity<User> createUser(@RequestBody User user) {
        User createdUser = userService.createUser(user);
        HttpHeaders headers = getCommonHeaders("Create a new user");
        return createdUser != null
                ? new ResponseEntity<>(createdUser, headers, HttpStatus.CREATED)
                : new ResponseEntity<>(headers, HttpStatus.BAD_REQUEST);
    }

    @PutMapping("/{id}")
    public ResponseEntity<User> updateUser(@PathVariable("id") String id, @RequestBody User user) {
        User updatedUser = userService.updateUser(id, user);
        HttpHeaders headers = getCommonHeaders("Update a user");
        return updatedUser != null
                ? new ResponseEntity<>(updatedUser, headers, HttpStatus.OK)
                : new ResponseEntity<>(headers, HttpStatus.NOT_FOUND);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteUser(@PathVariable("id") String id) {
        boolean deleted = userService.deleteUser(id);
        HttpHeaders headers = getCommonHeaders("Delete a user");
        return deleted
                ? new ResponseEntity<>(headers, HttpStatus.OK)
                : new ResponseEntity<>(headers, HttpStatus.NOT_FOUND);
    }

    @GetMapping("/{id}")
    public ResponseEntity<User> getUserById(@PathVariable("id") String id) {
        User user = userService.getUserById(id);
        HttpHeaders headers = getCommonHeaders("Get a user");
        return user != null
                ? new ResponseEntity<>(user, headers, HttpStatus.OK)
                : new ResponseEntity<>(headers, HttpStatus.NOT_FOUND);
    }

    private HttpHeaders getCommonHeaders(String description) {
        HttpHeaders headers = new HttpHeaders();
        headers.add("description", description);
        headers.add("content-type", "application/json");
        headers.add("date", new Date().toString());
        headers.add("server", "H2 Database");
        headers.add("version", "1.0.0");
        headers.add("user-count", String.valueOf(userService.countUsers()));
        headers.add("object", "users");

        return headers;
    }
}
