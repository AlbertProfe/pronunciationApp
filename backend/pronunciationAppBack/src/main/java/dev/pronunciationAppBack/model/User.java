package dev.pronunciationAppBack.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import jakarta.validation.constraints.Pattern;
import lombok.*;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;
import jakarta.validation.constraints.Email;

import java.time.LocalDate;
import java.util.List;
import java.util.UUID;

@AllArgsConstructor
@NoArgsConstructor
//@Data
@Entity
//@Table(name = "USER")
public class User {
    @Id
    private String id;
    @NotBlank(message = "Username is required")
    @Size(min = 3, max = 15)
    private String userName;
    @Email(message = "Invalid email format")
    @NotBlank(message = "Email is required")
    private String email;
    @Size(min = 8, max = 20, message = "Password must be at least 8 characters long")
    @Pattern(
            regexp = "^(?=.*\\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&+=]).*$",
            message = "Password must contain at least one uppercase letter, one lowercase letter, one digit, and one special character")
    private String password;
    private boolean active;
    private LocalDate createdAt;

    @JsonIgnore
    @OneToMany(mappedBy = "userMapped", cascade = CascadeType.ALL,
        fetch = FetchType.LAZY)
    private List<Word> wordsMapped;

    public String getUserName() {
        return userName;
    }

    public void setUserName(String userName) {
        this.userName = userName;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public boolean isActive() {
        return active;
    }

    public void setActive(boolean active) {
        this.active = active;
    }

    public LocalDate getCreatedAt() {
        return createdAt;
    }

    public void setCreatedAt(LocalDate createdAt) {
        this.createdAt = createdAt;
    }
    @Override
    public String toString() {
        return "Customer{" +
                "id='" + id + '\'' +
                "name: " + userName + "\n"  +
                "email: " + email + "\n" +
                "active: " + active + "\n" +
                "created at: " + createdAt + "\n" +
                '}';
    }

}
