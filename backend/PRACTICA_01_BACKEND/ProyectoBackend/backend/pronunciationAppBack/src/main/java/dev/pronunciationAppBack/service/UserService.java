package dev.pronunciationAppBack.service;

import dev.pronunciationAppBack.model.UserClient;
import dev.pronunciationAppBack.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;
import java.util.Optional;


@Service
public class UserService {


    @Autowired
    private UserRepository userRepository;

    public List<UserClient> getAllUser() {
        List<UserClient> allUsers = userRepository.findAll();
       return allUsers;
    }


    public Optional<UserClient> getUserById(String id) {
            return Optional.ofNullable(userRepository.getUserById(id));
        }

        public UserClient createUser(UserClient userClient) {
            return userRepository.save(userClient);
        }

        public UserClient updateUser(UserClient userClient) {
            return userRepository.save(userClient);
        }

        public void deleteUser(String id) {
           userRepository.deleteById(id);
        }

        public void deleteAllUser() {
           userRepository.deleteAll();
        }

        public boolean existsUserById(String id) {
            return userRepository.existsById(id);
        }

        public long getUserCount() {
            return userRepository.count();
        }


}
