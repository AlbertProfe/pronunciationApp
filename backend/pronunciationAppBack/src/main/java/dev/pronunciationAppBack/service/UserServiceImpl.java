package dev.pronunciationAppBack.service;

import dev.pronunciationAppBack.model.User;
import dev.pronunciationAppBack.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.util.List;

@Service
public class UserServiceImpl implements UserService {

    @Autowired
    private UserRepository userRepository;

    public List<User> getActiveUsers() {
        return userRepository.findByActiveTrue();
    }

    public List<User> getUsersCreatedRecently(int days) {
        LocalDate cutoffDate = LocalDate.now().minusDays(days);
        return userRepository.findByCreatedAtAfter(cutoffDate);
    }

    public long countActiveUsers() {
        return userRepository.countByActiveTrue();
    }

    @Override
    public List<User> getAllUsers() {
        return userRepository.findAll();
    }

    @Override
    public User createUser(User user) {

        return userRepository.save(user);
    }

    @Override
    public User getUserById(String id) {
        return userRepository.findById(id).orElse(null);
    }

    @Override
    public User updateUser(String id, User userDetails) {
        User user = userRepository.findById(id).orElse(null);
        if (user != null) {
            if (userDetails.getUserName() != null) {
                user.setUserName(userDetails.getUserName());
            }

            if (userDetails.getEmail() != null) {
                user.setEmail(userDetails.getEmail());
            }
            if (userDetails.getPassword() != null) {
                user.setPassword(userDetails.getPassword());
            }
            if (userDetails.isActive()) {
                user.setActive(userDetails.isActive());
            }
            if (userDetails.getCreatedAt() != null){
                user.setCreatedAt(userDetails.getCreatedAt());
        }
            return userRepository.save(user);
        }
        return null;
    }

    @Override
    public boolean deleteUser(String id) {
        if (userRepository.existsById(id)){
            userRepository.deleteById(id);
            System.out.println("Deleted successfully!");
            return true;
        }
        System.out.println("ID doesn't exist!");
        return false;
    }

    @Override
    public long countUsers() {
        return userRepository.count();
    }
}
