package dev.pronunciationAppBack.repository;

import dev.pronunciationAppBack.model.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User, String> {
    User getUserById(String id);
}
