package dev.pronunciationAppBack.repository;

import dev.pronunciationAppBack.model.UserEntity;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<UserEntity, String> {
    UserEntity getUserById(String id);
}
