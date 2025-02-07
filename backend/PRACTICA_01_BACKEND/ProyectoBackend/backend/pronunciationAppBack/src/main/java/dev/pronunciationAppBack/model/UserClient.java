package dev.pronunciationAppBack.model;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;


@Entity
public class UserClient {

    @Id
    private String id;
    private String name;
    private String age;
    private boolean is_Active;

    public UserClient() {
    }

    public UserClient(String id, String name, String age, boolean is_Active) {
        this.id = id;
        this.name = name;
        this.age = age;
        this.is_Active = is_Active;
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

    public void setName(String name) {
        this.name = name;
    }

    public String getAge() {
        return age;
    }

    public void setAge(String age) {
        this.age = age;
    }

    public boolean isIs_Active() {
        return is_Active;
    }

    public void setIs_Active(boolean is_Active) {
        this.is_Active = is_Active;
    }
}

