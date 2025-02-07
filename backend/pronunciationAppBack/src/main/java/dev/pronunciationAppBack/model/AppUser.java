package dev.pronunciationAppBack.model;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.validation.constraints.*;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.springframework.format.annotation.DateTimeFormat;

import java.time.LocalDate;

@Entity
@Getter @Setter @NoArgsConstructor
public class AppUser {

    @Id
    private String id;

    @NotBlank(message = "Name should not be empty")
    @Size(min = 3, max=40, message = "Name should be between 3 and 40 characters")
    private String name;

    @NotBlank(message = "Email should not be empty")
    @Email(message = "Please enter a valid email address")
    private String email;

    @NotBlank(message = "Password should not be empty")
    @Size(min = 6, max=20, message = "Password should be between 6 and 20 characters")
    private String password;

    @Min(value = 3, message = "Age should be between 3 and 100")
    @Max(value = 100, message = "Age should be between 3 and 100")
    private int age;

    @DateTimeFormat(pattern = "yyyy-MM-dd")
    private LocalDate joinDate;

    public AppUser(String id, String name, String email, String password, int age, LocalDate joinDate) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.password = password;
        this.age = age;
        this.joinDate = joinDate != null ? joinDate : LocalDate.now();
    }

    @Override
    public String toString() {
        return String.format("User{id='%s', name='%s', email='%s', age=%d, joinDate=%s}",
                id, name, email, age, joinDate);
    }
}
