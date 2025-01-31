# PRA#02-SpringBoot: Create User API Rest

## CIFO La Violeta - FullStack IFCD0210-25 MF01

In this practical exercise, you will develop a Spring Boot application, focusing on API Rest data for <mark>user management, CRUD operations.</mark>

## Objectives

The primary objectives of this practical exercise are to:

- Develop a comprehensive Spring Boot RESTful API for user management
- Implement core Spring Boot concepts including entities, repositories, services, and controllers
- Create a robust user management system with full CRUD functionality
- Configure a local H2 database for development and testing
- Demonstrate best practices in Spring Boot application development

## Project Base

- Backend Repository: [PronunciationApp Backend](https://github.com/AlbertProfe/pronunciationApp/tree/backend-spring-boot/backend/pronunciationAppBack)
- Resources: [Backend Resources](https://github.com/AlbertProfe/pronunciationApp/tree/backend-spring-boot/backend/resources)
- Reference Project: [Restaurant Manager](https://github.com/AlbertProfe/restaurantManager)

## Tasks

Summary of tasks:

- [ ] Create User @Entity
- [ ] Create UserController (Rest API controller)
- [ ] Implement UserRepository
- [ ] Configure application properties with local H2 database
- [ ] Develop UserService
- [ ] Test all endpoints with Postman

### Tasks Description

1. **Create User @Entity**
   
   - Design a comprehensive user entity with relevant fields
   - Implement proper annotations for JPA mapping
   - Include validation and constraints

2. **Create UserController**
   
   - Develop RESTful endpoints for user management
   - Implement error handling
   - Use ResponseEntity for flexible response handling

3. **Implement UserRepository**
   
   - Extend JpaRepository
   - Add custom query methods if required
   - Ensure proper database interaction

4. **Configure H2 Database**
   
   - Set up application.properties for H2 database
   - Configure connection parameters
   - Enable H2 console for development

5. **Develop UserService**
   
   - Implement business logic for user operations
   - Add service layer between controller and repository
   - Include data validation and transformation

6. **Postman Endpoint Testing**
   
   - Create collection for user API
   - Test all CRUD operations
   - Verify response codes and data integrity

## Optional Enhancements

### 1. Implement Data Filling with Faker Utility

#### Maven Dependency

```xml
<dependency>
    <groupId>com.github.javafaker</groupId>
    <artifactId>javafaker</artifactId>
    <version>1.0.2</version>
</dependency>
```

#### Faker Utility Class

```java
@Component
public class UserFakerGenerator {
    private final Faker faker = new Faker();

    public User generateRandomUser() {
        User user = new User();
        user.setUsername(faker.name().username());
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
```

### 2. Advanced Testing Strategy

#### Unit Tests

```java
@ExtendWith(MockitoExtension.class)
class UserServiceUnitTest {
    @Mock
    private UserRepository userRepository;

    @InjectMocks
    private UserService userService;

    @Test
    void testCreateUser() {
        User user = new User();
        user.setUsername("testuser");

        when(userRepository.save(any(User.class))).thenReturn(user);

        User createdUser = userService.createUser(user);

        assertNotNull(createdUser);
        assertEquals("testuser", createdUser.getUsername());
    }
}
```

#### Integration Tests

```java
@SpringBootTest
@AutoConfigureMockMvc
class UserControllerIntegrationTest {
    @Autowired
    private MockMvc mockMvc;

    @Autowired
    private UserRepository userRepository;

    @Test
    void testGetAllUsers() throws Exception {
        mockMvc.perform(get("/api/users"))
            .andExpect(status().isOk())
            .andExpect(content().contentType(MediaType.APPLICATION_JSON));
    }

    @Test
    void testCreateUser() throws Exception {
        User user = new User();
        user.setUsername("newuser");
        user.setEmail("newuser@example.com");

        mockMvc.perform(post("/api/users")
            .contentType(MediaType.APPLICATION_JSON)
            .content(new ObjectMapper().writeValueAsString(user)))
            .andExpect(status().isOk())
            .andExpect(jsonPath("$.username").value("newuser"));
    }
}
```

### 3. New Custom Queries

#### UserRepository Custom Queries

```java
public interface UserRepository extends JpaRepository<User, Long> {
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
```

#### Service Layer Query Methods

```java
@Service
public class UserService {
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
}
```

### 4. Additional Enhancements

#### Validation

```java
public class User {
    @NotBlank(message = "Username is required")
    @Size(min = 3, max = 50)
    private String username;

    @Email(message = "Invalid email format")
    @NotBlank(message = "Email is required")
    private String email;

    @Size(min = 6, message = "Password must be at least 6 characters")
    private String password;
}
```

### Submission Guidelines

- Fork the existing [PronunciationApp](https://github.com/AlbertProfe/pronunciationApp) repository and clone it to your local environment.
- Create a new branch named `PRA02-YourName` from the `backend-spring-boot` branch.
- Commit your changes with clear, descriptive messages.
- Push your branch to your forked repository.
- Create a pull request to the AlbertProfe repository with a summary of your changes, titled:
  - `PRA#02_React-YourName-CreateUserAPIRest`

Good luck with your implementation! Remember to focus on creating reusable components and maintaining a clean, efficient codebase.



Citations:
[1] https://dev.to/satokenta/step-by-step-tutorial-on-setting-up-a-mock-server-using-postman-bee
[2] https://learning.postman.com/docs/designing-and-developing-your-api/mocking-data/setting-up-mock/
[3] https://www.tutorialspoint.com/postman/postman_mock_server.htm
[4] https://learning.postman.com/docs/designing-and-developing-your-api/mocking-data/mocking-with-examples/
[5] https://apidog.com/blog/postman-mock-server/
[6] https://www.youtube.com/watch?v=m0ueuTjhbms
[7] https://www.geeksforgeeks.org/how-to-create-mock-servers-using-postman/
[8] https://learning.postman.com/docs/designing-and-developing-your-api/mocking-data/mock-with-api/
[9] https://www.youtube.com/watch?v=CCXJZpmnmGQ
[10] https://learning.postman.com/docs/designing-and-developing-your-api/mocking-data/mock-an-api/
