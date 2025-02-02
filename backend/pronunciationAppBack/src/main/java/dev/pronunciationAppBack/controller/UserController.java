package dev.pronunciationAppBack.controller;
import dev.pronunciationAppBack.model.User;
import dev.pronunciationAppBack.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;



@RestController
@RequestMapping("/api/users")
public class UserController {

    @Autowired
    private UserRepository UserRepository;
    
    @GetMapping("/hello")
    public String hello() {
        return "Hello Albert, this is a test";
    }

    @GetMapping
    public List<User> getAllUsers() {
        List<User> users = UserRepository.findAll();
        System.out.println("Number of users: " + users.size());
        for (User user: users) {
            System.out.println("User: " + user);
    }

    return users;
    }
    
    @GetMapping(/{id})
    public User getUserById(@PathVariable String id) {
        return UserRepository.getUserById(id);
    }

    @PostMapping("(createUser)")
    public User createUser(@RequestBody User user) {
        
        
        return UserRepository.save(user);
    }

    @DeleteMapping("/{id}")
    public String deleteUser(@PathVariable("id") String idToDelete) {
        UserRepository.deleteById(idToDelete);
        return "User" + idToDelete + "deleted.";
    }

    @DeleteMapping
    public String deleteAllUsers() {
        UserRepository.deleteAll();
        return "All users deleted";
    }
    

    
}
