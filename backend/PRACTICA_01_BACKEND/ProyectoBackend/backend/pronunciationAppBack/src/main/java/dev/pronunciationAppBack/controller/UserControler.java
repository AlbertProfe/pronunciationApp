package dev.pronunciationAppBack.controller;

import dev.pronunciationAppBack.model.UserClient;
import dev.pronunciationAppBack.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Date;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/UserClient")
public class UserControler {

    @Autowired
    public UserService userService;

    @GetMapping
    public List<UserClient> getAliUsers() {
        List<UserClient> userClients = userService.getAllUser();
        System.out.println("Number of userClients: " + userClients.size());
           for (UserClient userClient : userClients) {
             System.out.println("userClients: " + userClients);
        }
           return userClients;
    }
    @GetMapping("/{id}")
    public Optional<UserClient> getUserById(@PathVariable String id) {
        return userService.getUserById(id);
    }


    @PostMapping("/createUser")
    public ResponseEntity<UserClient> createUser(@RequestBody  UserClient User) {
     UserClient createUser = userService.createUser(User);
        HttpHeaders headers = getCommonHeaders("Create a new word");

        return new ResponseEntity<>(createUser, headers, HttpStatus.CREATED);
    }

    @PutMapping("/{id}")
    public UserClient updateUser(@PathVariable String id, @RequestBody UserClient user) {
        return userService.updateUser(user);
    }
    @DeleteMapping("/{id}")
    public String deleteUser(@PathVariable("id") String idToDelete) {
        userService.deleteUser(idToDelete);
        return "UserClient delete";
    }

    private HttpHeaders getCommonHeaders(String description) {
        HttpHeaders headers = new HttpHeaders();
        headers.add("desc", description);
        headers.add("content-type", "application/json");
        headers.add("date", new Date().toString());
        headers.add("server", "Spring Boot");
        headers.add("version", "1.0.0");
        headers.add("object", "words");
        return headers;
    }

}
