package dev.pronunciationAppBack.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.*;

import java.time.LocalDate;
import java.util.List;
import java.util.UUID;

@AllArgsConstructor
@NoArgsConstructor
//@Data
@Entity
@Table(name = "USER")
@Getter
@Setter
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
