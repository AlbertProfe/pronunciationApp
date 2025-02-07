package dev.pronunciationAppBack.controller;


import dev.pronunciationAppBack.model.UserEntity;
import dev.pronunciationAppBack.service.UserService;
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
    public ResponseEntity<List<UserEntity>> getAllUsers() {
        List<UserEntity> users = userService.getAllUsers();
        HttpHeaders headers = getCommonHeaders("Get all users");

        return !users.isEmpty()
                ? new ResponseEntity<>(users, headers, HttpStatus.OK)
                : new ResponseEntity<>(headers, HttpStatus.NOT_FOUND);
    }

    @GetMapping("/{id}")
    public ResponseEntity<UserEntity> getUserById(@PathVariable String id) {
        Optional<UserEntity> userEntity = userService.getUserById(id);
        HttpHeaders headers = getCommonHeaders("Get user by ID");
        
        return userEntity.map(value -> new ResponseEntity<>(value, headers, HttpStatus.OK))
                .orElseGet(() -> new ResponseEntity<>(headers, HttpStatus.NOT_FOUND));

    }
    
    @PostMapping("/createUser")
    public ResponseEntity<UserEntity> createUser(@RequestBody UserEntity userEntity) {
        UserEntity createUserEntity = userService.createUser(userEntity);
        HttpHeaders headers = getCommonHeaders("Create a new user");
        
        return new ResponseEntity<>(createUserEntity, headers, HttpStatus.CREATED);
    }
    
    @PutMapping("/{id}")
    public ResponseEntity<UserEntity> updateUser(@PathVariable String id, @RequestBody UserEntity user) {
        UserEntity updateUser = userService.updateUser(user);
        HttpHeaders headers = getCommonHeaders("Update a user");
        
        return new ResponseEntity<>(updateUser, headers, HttpStatus.OK);
    }
    
    @DeleteMapping("/{id}")
    public  ResponseEntity<String> deleteUser(@PathVariable("id") String idToDelete) {
        HttpHeaders  headers = getCommonHeaders("Delete a user");
        
        if (userService.existsById(idToDelete)) {
            userService.deleteUser(idToDelete);
            return new ResponseEntity<>("UserEntity deleted", headers, HttpStatus.OK);
        } else {
            return new ResponseEntity<>("UserEntity not found", headers, HttpStatus.NOT_FOUND);
        }
    }
    
    @DeleteMapping
    public ResponseEntity<String> deleteAllUsers() {
        userService.deleteAllUsers();
        HttpHeaders headers = getCommonHeaders("Delete all users");
        return new ResponseEntity<>("All users deleted", headers, HttpStatus.OK);
    }

    private HttpHeaders getCommonHeaders(String string) {
        HttpHeaders headers =  new HttpHeaders();
        return headers;
    }
}