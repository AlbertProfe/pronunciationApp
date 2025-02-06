package dev.pronunciationAppBack.repository;

import dev.pronunciationAppBack.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.time.LocalDate;
import java.util.List;


public interface UserRepository extends JpaRepository<User, String> {
    // Find active users
    List<User> findByActiveTrue();

    // Find users created after a specific date
    List<User> findByCreatedAtAfter(LocalDate date);

    // Find users by username containing
    List<User> findByUsernameContaining(String username);

    // Count active users
    long countByActiveTrue();

    // Find users with email domain
    List<User> findByEmailContaining(String domain);

    // Complex query with multiple conditions
    @Query("SELECT u FROM User u WHERE u.active = true AND u.createdAt > :date")
    List<User> findActiveUsersCreatedAfter(
            @Param("date") LocalDate date
    );
}
