package dev.pronunciationAppBack.service;

import dev.pronunciationAppBack.model.User;
import dev.pronunciationAppBack.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.swing.text.html.Option;
import java.util.List;
import java.util.Optional;

@Service
public class UserService {

    @Autowired
    UserRepository userRepository;

    public List<User> getAllUsers() {
        return userRepository.findAll();
    }
    public Optional<User> getById(String id) {
        return userRepository.findById(id);
    }
    public Optional<User> createUser(User user) {
        if (userRepository.existsById(user.getId())) {
            return Optional.empty();
        }
        return Optional.of(userRepository.save(user));
    }
    public Optional<User> updateUser(String id, User user) {
        if (userRepository.existsById(id)) {
            return Optional.of(userRepository.save(user));
        }
        return Optional.empty();
    }
    public Optional<String> deleteUser(String idToDelete) {
        if (userRepository.existsById(idToDelete)) {
            userRepository.deleteById(idToDelete);
            return Optional.of("Usuario borrado");
        }
        return Optional.empty();
    }

}
