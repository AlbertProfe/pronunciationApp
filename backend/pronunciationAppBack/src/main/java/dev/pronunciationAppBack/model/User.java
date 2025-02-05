package dev.pronunciationAppBack.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDate;
import java.util.List;
import java.util.UUID;

@AllArgsConstructor
@NoArgsConstructor
@Data
@Entity
@Table(name = "USER")
public class User {
    @Id
    private String id;
    private String userName;
    private String email;
    private String password;
    private boolean active;
    private LocalDate createdAt;

    @JsonIgnore
    @OneToMany(mappedBy = "userMapped", cascade = CascadeType.ALL,
        fetch = FetchType.LAZY)
    private List<Word> wordsMapped;

    public User(String id,String name, String email, String password, boolean active, LocalDate createdAt) {
        this.id = id;
        this.userName = name;
        this.password = password;
        this.email = email;
        this.active = active;
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
