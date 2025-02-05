package dev.pronunciationAppBack.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

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
    private String name;
    private String email;

    @JsonIgnore
    @OneToMany(mappedBy = "userMapped", cascade = CascadeType.ALL,
        fetch = FetchType.LAZY)
    private List<Word> wordsMapped;

    public User(String id,String name, String email) {
        this.id = id;
        this.name = name;
        this.email = email;
    }

    @Override
    public String toString() {
        return "Customer{" +
                "id='" + id + '\'' +
                "name: " + name + "\n"  +
                "email: " + email + "\n"
                + '}';
    }

}
