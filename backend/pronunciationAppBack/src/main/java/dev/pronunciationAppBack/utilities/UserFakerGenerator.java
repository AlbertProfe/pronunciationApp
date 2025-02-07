package dev.pronunciationAppBack.utilities;

import com.github.javafaker.Faker;
import dev.pronunciationAppBack.model.User;
import org.springframework.stereotype.Component;

import java.time.LocalDate;
import java.util.List;
import java.util.stream.Collectors;
import java.util.stream.IntStream;

@Component
public class UserFakerGenerator {

    private final Faker faker = new Faker();

    public User generateRandomUser() {

        User user = new User();
        user.setUserName(faker.name().username());
        user.setEmail(faker.internet().emailAddress());
        user.setPassword(faker.internet().password());
        user.setActive(faker.bool().bool());
        user.setCreatedAt(LocalDate.now());

        // Additional fields if needed
        return user;
    }

    public List<User> generateUsers(int count) {
        return IntStream.range(0, count)
                .mapToObj(i -> generateRandomUser())
                .collect(Collectors.toList());
    }
}