package dev.pronunciationAppBack.model;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;

@Entity
public class User {

    @Id
    private String id;
    private String userName;
    private int userAge;
    private String userEmail;
    private String password;

    public User(String id, String userName, int userAge, String userEmail, String password){

        this.id = id;
        this.userName = userName;
        this.userAge = userAge;
        this.userEmail = userEmail;
        this.password = password;
    }

    public String getUserEmail() {
        return userEmail;
    }

    public int getUserAge() {
        return userAge;
    }

    public String getId() {
        return id;
    }

    public String getUserName() {
        return userName;
    }

    public String getPassword() {
        return password;
    }

    public void setId(String id) {
        this.id = id;
    }

    public void setUserAge(int userAge) {
        this.userAge = userAge;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public void setUserEmail(String userEmail) {
        this.userEmail = userEmail;
    }

    public void setUserName(String userName) {
        this.userName = userName;
    }
}
