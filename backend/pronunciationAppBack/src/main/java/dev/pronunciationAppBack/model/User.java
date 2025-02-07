package dev.pronunciationAppBack.model;


import jakarta.persistence.Entity;
import jakarta.persistence.Id;

@Entity
public class User {

    @Id
    private String id;
    private String username;
    private int age;
    private String email;
    private int totalScore;
    private boolean isActive;

    public User() {}

    public User(String id, String username, int age, String email, int totalScore, boolean isActive) {
        this.id = id;
        this.username = username;
        this.age = age;
        this.email = email;
        this.totalScore = totalScore;
        this.isActive = isActive;
    }

    public String getId() {
        return id;
    }

    public String getUsername() {
        return username;
    }

    public  int getAge() {
        return  age;
    }

    public String getEmail() {
        return  email;
    }

    public int getTotalScore() {
        return totalScore;
    }

    public boolean getIsActive() {
        return isActive;
    }

    public void setId(String id) {
        this.id = id;
    }

    public void  setUsername(String username) {
        this.username = username;
    }

    public void setAge(int age) {
        this.age = age;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public void setTotalScore(int totalScore) {
        this.totalScore = totalScore;
    }

    public void setActive(boolean isActive) {
        this.isActive = isActive;
    }

    @Override
    public String toString() {
        return "User{" +
                "id='" + id + '\'' +
                ", userName='" + username + '\'' +
                ", age='" + age + '\'' +
                ", email='" + email + '\'' +
                ", totalScore='" + totalScore + '\'' +
                ", isActive='" + isActive + '\'' +
                '}';
    }
}