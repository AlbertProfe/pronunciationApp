package dev.pronunciationAppBack.model;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "APP_USERS") // Because USER is an H2 reserved word
public class User {
    
    @Id
    private String id;
    private String name;
    private String email;
    private String password;
    private boolean isActive;

    public User() {}

    public User(String id, String name, String email, String password, boolean isActive) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.password = password;
        this.isActive = isActive;

    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName (String name) {
        this.name = name;
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

    public boolean setActive() {
        return isActive;
    }

    @Override
    public String toString() {
        return "User{" +
        "id='" + id + '\'' +
        ", name='" + name + '\'' +
        ", email='" + email + '\'' +
        ", isActive=" + isActive +
        '}';
    }

    
}
