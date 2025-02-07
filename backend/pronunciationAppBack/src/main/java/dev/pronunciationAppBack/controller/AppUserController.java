package dev.pronunciationAppBack.controller;

import dev.pronunciationAppBack.model.AppUser;
import dev.pronunciationAppBack.service.AppUserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Date;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/users")
public class AppUserController {

    @Autowired
    private AppUserService appUserService;

    @GetMapping
    public ResponseEntity<List<AppUser>> getAllUsers() {
        List<AppUser> users = appUserService.getAllUsers();
        HttpHeaders headers = getCommonHeaders("Get all users");

        return !users.isEmpty()
                ? new ResponseEntity<>(users, headers, HttpStatus.OK)
                : new ResponseEntity<>(headers, HttpStatus.NOT_FOUND);
    }

    @GetMapping("/{id}")
    public ResponseEntity<AppUser> getUserById(@PathVariable String id) {
        Optional<AppUser> user = appUserService.findAppUserById(id);
        HttpHeaders headers = getCommonHeaders("Get user by ID");

        return user.map(value -> new ResponseEntity<>(value, headers, HttpStatus.OK))
                .orElseGet(() -> new ResponseEntity<>(headers, HttpStatus.NOT_FOUND));
    }

    @PostMapping()
    public ResponseEntity<AppUser> createUser(@RequestBody AppUser user) {
        Optional<AppUser> createdUser = appUserService.createAppUser(user);
        HttpHeaders headers = getCommonHeaders("Create a new user");

        return createdUser.map(value -> new ResponseEntity<>(value, headers, HttpStatus.CREATED))
                .orElseGet(() -> new ResponseEntity<>(headers, HttpStatus.BAD_REQUEST));
    }

    @PutMapping("/{id}")
    public ResponseEntity<AppUser> updateUser(@PathVariable String id, @RequestBody AppUser user) {
        Optional<AppUser> updatedUser = appUserService.updateAppUser(user);
        HttpHeaders headers = getCommonHeaders("Update a user");

        return updatedUser.map(value -> new ResponseEntity<>(value, headers, HttpStatus.OK))
                .orElseGet(() -> new ResponseEntity<>(headers, HttpStatus.NOT_FOUND));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<String> deleteUser(@PathVariable String id) {
        HttpHeaders headers = getCommonHeaders("Delete a user");

        return appUserService.deleteAppUser(id)
                ? new ResponseEntity<>("User deleted", headers, HttpStatus.OK)
                : new ResponseEntity<>("User not found", headers, HttpStatus.NOT_FOUND);

    }

    @GetMapping("/findBy")
    public ResponseEntity<AppUser> getAppUserByEmail(@RequestParam String email) {
        Optional<AppUser> user = appUserService.findAppUserByEmail(email);
        HttpHeaders headers = getCommonHeaders("Get user by email");

        return user.map(value -> new ResponseEntity<>(value, headers, HttpStatus.OK))
                .orElseGet(() -> new ResponseEntity<>(headers, HttpStatus.NOT_FOUND));
    }

    private HttpHeaders getCommonHeaders(String description) {
        HttpHeaders headers = new HttpHeaders();
        headers.add("desc", description);
        headers.add("content-type", "application/json");
        headers.add("date", new Date().toString());
        headers.add("server", "Spring Boot");
        headers.add("version", "1.0.0");
        headers.add("user-count", String.valueOf(appUserService.getAppUserCount()));
        headers.add("object", "appUsers");
        return headers;
    }
}
