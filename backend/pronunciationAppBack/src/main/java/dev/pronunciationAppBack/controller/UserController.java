package dev.pronunciationAppBack.controller;


import dev.pronunciationAppBack.model.User;
import dev.pronunciationAppBack.service.UserService;
import org.apache.coyote.Request;
import org.apache.coyote.Response;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/users")
public class UserController {
    
    @Autowired
    private UserService userService;
    
    @GetMapping
    public ResponseEntity<List<User>> getAllUsers() {
        List<User> user = userService.getAllUsers();
        HttpHeaders headers = getCommonHeaders("Get all users");

        return !user.isEmpty()
                ? new ResponseEntity<>(users, headers, HttpStatus.OK)
                : new ResponseEntity<>(headers, HttpStatus.NOT_FOUND);
    }

    @GetMapping("/{id}")
    public ResponseEntity<User> getUserById(@PathVariable String id) {
        Optional<User> user = userService.getUserById(id);
        HttpHeaders headers = getCommonHeaders("Get user by ID");
        
        return user.map(value -> new ResponseEntity<>(value, headers, HttpStatus.OK))
                .orElseGet(() -> new ResponseEntity<>(headers, HttpStatus.NOT_FOUND));
        
    }
    
    @PostMapping("/createUser")
    public ResponseEntity<User> createUser(@RequestBody User user) {
        User createUser = userService.createUser(user);
        HttpHeaders headers = getCommonHeaders("Create a new user");
        
        return new ResponseEntity<>(createUser, headers, HttpStatus.CREATED);
    }
    
    @PutMapping("/{id}")
    public ResponseEntity<User> updateUser(@PathVariable String id, @RequestBody User user) {
        User updateUser = user.Service.updateUser(user);
        HttpHeaders headers = getCommonHeaders("Update a user");
        
        return new ResponseEntity<>(updateUser, headers, HttpStatus.OK);
    }
    
    @DeleteMapping("/{id}")
    public  ResponseEntity<String> deleteUser(@PathVariable("id") String idToDelete) {
        HttpHeaders  headers = getCommonHeaders("Delete a user");
        
        if (userService.existsById(idToDelete)) {
            userService.deleteUser(idToDelete);
            return new ResponseEntity<>("User deleted", headers, HttpsStatus.OK);
        } else {
            return new ResponseEntity<>("User not found", headers, HttpStatus.NOT_FOUND);
        }
    }
    
    @DeleteMapping
    public ResponseEntity<String> deleteAllUsers() {
        userService.deleteAllUsers();
        HttpHeaders headers = getCommonHeaders("Delete all users");
        return new ResponseEntity<>("All users deleted", headers, HttpStatus.OK);
    }
}