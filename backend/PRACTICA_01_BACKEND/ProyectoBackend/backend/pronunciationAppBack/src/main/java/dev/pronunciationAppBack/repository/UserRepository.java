package dev.pronunciationAppBack.repository;

import dev.pronunciationAppBack.model.UserClient;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<UserClient, String>{

    UserClient getUserById(String id);
}
