# PronunciationApp Backend v0.2

## Refactoring @RestController and adding @Service

> Implementing a `WordService` and refactoring the `WordController` is a good practice in Spring Boot applications for several reasons. 

Let's implement the `WordService`, refactor the `WordController`, and discuss why this approach is beneficial.

### Implementing WordService

```java
package dev.pronunciationAppBack.service;

import dev.pronunciationAppBack.model.Word;
import dev.pronunciationAppBack.repository.WordRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class WordService {

    @Autowired
    private WordRepository wordRepository;

    public List<Word> getAllWords() {
        return wordRepository.findAll();
    }

    public Optional<Word> getWordById(String id) {
        return Optional.ofNullable(wordRepository.getWordById(id));
    }

    public Word createWord(Word word) {
        return wordRepository.save(word);
    }

    public Word updateWord(Word word) {
        return wordRepository.save(word);
    }

    public void deleteWord(String id) {
        wordRepository.deleteById(id);
    }

    public void deleteAllWords() {
        wordRepository.deleteAll();
    }

    public boolean existsById(String id) {
        return wordRepository.existsById(id);
    }

    public long getWordCount() {
        return wordRepository.count();
    }

    // Additional business logic can be added here
    public Word getWordByPhoneticSpelling(String pronunciation) {
        return wordRepository.getWordByPhoneticSpelling(pronunciation);
    }
}
```

### Why is this refactoring necessary?

1. **Separation of Concerns**: The service layer separates business logic from the controller, making the code more modular and easier to maintain.

2. **Reusability**: Business logic in the service can be reused across different controllers or other services.

3. **Testability**: It's easier to unit test business logic in a service class than in a controller.

4. **Scalability**: As the application grows, having a separate service layer makes it easier to manage and scale the codebase.

5. **Abstraction**: The controller doesn't need to know about the repository implementation, providing better abstraction.

#### Refactoring WordController

```java
@RestController
@RequestMapping("/api/words")
public class WordController {

    @Autowired
    private WordService wordService;

    /*
    @GetMapping("/hello")
    public ResponseEntity<String> hello() {
        HttpHeaders headers = getCommonHeaders("Hello endpoint");
        return new ResponseEntity<>("hello Emiliano, are you sleeping?", headers, HttpStatus.OK);
    }
    */

    @GetMapping
    public ResponseEntity<List<Word>> getAllWords() {
        List<Word> words = wordService.getAllWords();
        HttpHeaders headers = getCommonHeaders("Get all words");

        return !words.isEmpty()
                ? new ResponseEntity<>(words, headers, HttpStatus.OK)
                : new ResponseEntity<>(headers, HttpStatus.NOT_FOUND);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Word> getWordById(@PathVariable String id) {
        Optional<Word> word = wordService.getWordById(id);
        HttpHeaders headers = getCommonHeaders("Get word by ID");

        return word.map(value -> new ResponseEntity<>(value, headers, HttpStatus.OK))
                .orElseGet(() -> new ResponseEntity<>(headers, HttpStatus.NOT_FOUND));
    }

    @PostMapping("/createWord")
    public ResponseEntity<Word> createWord(@RequestBody Word word) {
        Word createdWord = wordService.createWord(word);
        HttpHeaders headers = getCommonHeaders("Create a new word");

        return new ResponseEntity<>(createdWord, headers, HttpStatus.CREATED);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Word> updateWord(@PathVariable String id, @RequestBody Word word) {
        Word updatedWord = wordService.updateWord(word);
        HttpHeaders headers = getCommonHeaders("Update a word");

        return new ResponseEntity<>(updatedWord, headers, HttpStatus.OK);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<String> deleteWord(@PathVariable("id") String idToDelete) {
        HttpHeaders headers = getCommonHeaders("Delete a word");

        if (wordService.existsById(idToDelete)) {
            wordService.deleteWord(idToDelete);
            return new ResponseEntity<>("Word deleted", headers, HttpStatus.OK);
        } else {
            return new ResponseEntity<>("Word not found", headers, HttpStatus.NOT_FOUND);
        }
    }

    @DeleteMapping
    public ResponseEntity<String> deleteAllWords() {
        wordService.deleteAllWords();
        HttpHeaders headers = getCommonHeaders("Delete all words");
        return new ResponseEntity<>("All words deleted", headers, HttpStatus.OK);
    }

    private HttpHeaders getCommonHeaders(String description) {
        HttpHeaders headers = new HttpHeaders();
        headers.add("desc", description);
        headers.add("content-type", "application/json");
        headers.add("date", new Date().toString());
        headers.add("server", "Spring Boot");
        headers.add("version", "1.0.0");
        headers.add("word-count", String.valueOf(wordService.getWordCount()));
        headers.add("object", "words");
        return headers;
    }
}
```

## Check health

Well create a new controller class that incorporates the <mark>health check endpoint along with other best practices</mark>. 

Here's the new `HealthController` class:

```java
package dev.pronunciationAppBack.controller;

import dev.pronunciationAppBack.model.Word;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Date;
import java.util.HashMap;
import java.util.Map;

@RestController
@RequestMapping("/api/health")
public class HealthController {

    @Autowired
    private WordService wordService;

    @GetMapping
    public ResponseEntity<Map<String, Object>> healthCheck() {
        Map<String, Object> healthStatus = new HashMap<>();
        healthStatus.put("status", "UP");
        healthStatus.put("timestamp", new Date());
        healthStatus.put("wordCount", wordService.getWordCount());

        boolean databaseConnection = checkDatabaseConnection();
        healthStatus.put("database", databaseConnection ? "Connected" : "Disconnected");

        // Add more health checks as needed
        healthStatus.put("memoryUsage", getMemoryUsage());
        healthStatus.put("diskSpace", getDiskSpace());

        HttpHeaders headers = getCommonHeaders("Health check endpoint");
        HttpStatus status = databaseConnection ? HttpStatus.OK : HttpStatus.SERVICE_UNAVAILABLE;

        return new ResponseEntity<>(healthStatus, headers, status);
    }

    private boolean checkDatabaseConnection() {
        try {
            wordService.getAllWords();
            return true;
        } catch (Exception e) {
            return false;
        }
    }

    private Map<String, Long> getMemoryUsage() {
        Runtime runtime = Runtime.getRuntime();
        Map<String, Long> memoryInfo = new HashMap<>();
        memoryInfo.put("total", runtime.totalMemory());
        memoryInfo.put("free", runtime.freeMemory());
        memoryInfo.put("used", runtime.totalMemory() - runtime.freeMemory());
        return memoryInfo;
    }

    private Map<String, Long> getDiskSpace() {
        java.io.File root = new java.io.File("/");
        Map<String, Long> diskInfo = new HashMap<>();
        diskInfo.put("total", root.getTotalSpace());
        diskInfo.put("free", root.getFreeSpace());
        diskInfo.put("usable", root.getUsableSpace());
        return diskInfo;
    }

    private HttpHeaders getCommonHeaders(String description) {
        HttpHeaders headers = new HttpHeaders();
        headers.add("desc", description);
        headers.add("content-type", "application/json");
        headers.add("date", new Date().toString());
        headers.add("server", "Spring Boot");
        headers.add("version", "1.0.0");
        return headers;
    }
}
```

This new `HealthController` class offers several improvements:

1. **Dedicated controller**: It's a separate controller focused on health and monitoring, following the Single Responsibility Principle.

2. **Comprehensive health check**: The `healthCheck()` method provides a detailed health status, including database connectivity, word count, memory usage, and disk space.

3. **Modular design**: Different aspects of the health check are separated into methods, making the code more maintainable and easier to extend.

4. **Resource monitoring**: It includes basic system resource monitoring (memory and disk space), which can be crucial for identifying potential issues.

5. **Consistent headers**: It uses a `getCommonHeaders()` method similar to the `WordController`, maintaining consistency across the API.

6. **Appropriate mapping**: The controller uses the `/api/health` endpoint, which is a common convention for health check APIs.

> This health check endpoint provides a comprehensive overview of your application's health, making it valuable for monitoring and troubleshooting in production environments.

## @Service business logic examples

#### Real Use Case #1

Let's consider a <mark>real use case where the service layer becomes key</mark>:

Imagine you're expanding your pronunciation app to include a feature for generating word lists based on difficulty levels. This involves complex logic that shouldn't be in the controller.

Add this method to `WordService`:

```java
public List<Word> getWordsByDifficultyLevel(int level) {
    List<Word> allWords = wordRepository.findAll();
    return allWords.stream()
            .filter(word -> calculateDifficulty(word) == level)
            .collect(Collectors.toList());
}

private int calculateDifficulty(Word word) {
    // Complex logic to determine word difficulty
    // Based on factors like length, rarity, phonetic complexity, etc.
    // This is a simplified example
    int difficulty = word.getWord().length();
    difficulty += word.getPhoneticSpelling().length();
    // More factors...
    return difficulty / 5; // Normalize to a 1-10 scale
}
```

And in `WordController`:

```java
@GetMapping("/difficulty/{level}")
public ResponseEntity<List<Word>> getWordsByDifficulty(@PathVariable int level) {
    List<Word> words = wordService.getWordsByDifficultyLevel(level);
    HttpHeaders headers = getCommonHeaders("Get words by difficulty");

    return !words.isEmpty()
            ? new ResponseEntity<>(words, headers, HttpStatus.OK)
            : new ResponseEntity<>(headers, HttpStatus.NOT_FOUND);
}
```

In this case, the service layer is key because:

1. It encapsulates complex business logic (difficulty calculation) that doesn't belong in the controller.
2. This logic can be reused in other parts of the application.
3. It's easier to test and modify the difficulty calculation independently of the controller.
4. If you decide to change how difficulty is calculated or stored (e.g., moving to a database-computed value), you only need to change the service, not the controller.

> This structure allows your application to grow and adapt to new requirements more easily, demonstrating the importance of a well-structured service layer in a Spring Boot application.

#### Real Use Case #2

Let's consider another real-world use case where the WordService would be essential: <mark>implementing a personalized word recommendation system based on a user's learning history and performance.</mark>

Here's how we could implement this feature:

```java
@Service
public class WordService {
    @Autowired
    private WordRepository wordRepository;

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private UserProgressRepository userProgressRepository;

    public List<Word> getPersonalizedWordRecommendations(String userId, int count) {
        User user = userRepository.findById(userId)
            .orElseThrow(() -> new UserNotFoundException("User not found"));

        List<UserProgress> userProgress = userProgressRepository.findByUserId(userId);

        Set<String> masteredWords = userProgress.stream()
            .filter(progress -> progress.getMasteryLevel() > 0.8)
            .map(UserProgress::getWordId)
            .collect(Collectors.toSet());

        List<Word> allWords = wordRepository.findAll();

        return allWords.stream()
            .filter(word -> !masteredWords.contains(word.getId()))
            .sorted(Comparator.comparingDouble(word -> calculateRelevance(word, user, userProgress)))
            .limit(count)
            .collect(Collectors.toList());
    }

    private double calculateRelevance(Word word, User user, List<UserProgress> userProgress) {
        double difficultyScore = calculateDifficulty(word);
        double userLevelScore = user.getProficiencyLevel();
        double progressScore = userProgress.stream()
            .filter(progress -> progress.getWordId().equals(word.getId()))
            .mapToDouble(UserProgress::getMasteryLevel)
            .findFirst()
            .orElse(0.0);

        // Complex algorithm to determine word relevance based on user's level, 
        // word difficulty, and user's progress on this word
        return (difficultyScore * 0.4) + (userLevelScore * 0.3) + ((1 - progressScore) * 0.3);
    }

    private double calculateDifficulty(Word word) {
        // Implementation of difficulty calculation
        // ...
    }
}
```

In the controller:

```java
@RestController
@RequestMapping("/api/words")
public class WordController {
    @Autowired
    private WordService wordService;

    @GetMapping("/recommendations/{userId}")
    public ResponseEntity<List<Word>> getPersonalizedRecommendations(
            @PathVariable String userId,
            @RequestParam(defaultValue = "10") int count) {
        List<Word> recommendations = wordService.getPersonalizedWordRecommendations(userId, count);
        HttpHeaders headers = getCommonHeaders("Get personalized word recommendations");

        return !recommendations.isEmpty()
                ? new ResponseEntity<>(recommendations, headers, HttpStatus.OK)
                : new ResponseEntity<>(headers, HttpStatus.NOT_FOUND);
    }
}
```

This use case demonstrates why the service layer is key:

1. <mark>Complex Business Logic</mark>: The recommendation system involves complex calculations and data processing that shouldn't be in the controller.

2. <mark>Data Integration</mark>: It requires integration of data from multiple repositories (words, users, and user progress), which is better handled in a service.

3. Reusability: The recommendation logic can be reused in other parts of the application, such as generating daily practice sessions or progress reports.

4. Scalability: As the recommendation algorithm becomes more sophisticated (e.g., incorporating machine learning), the service can be easily extended without affecting the controller.

5. Testability: The complex recommendation logic can be unit tested independently of the web layer.

6. Separation of Concerns: The controller remains focused on handling HTTP requests and responses, while the service manages the business logic.

7. Flexibility: If you decide to change how recommendations are generated (e.g., using a third-party AI service), you only need to modify the service, not the controller.

> This example showcases how a well-structured service layer can handle complex, data-intensive operations while keeping the controller lean and focused on its primary responsibility of managing HTTP interactions.

## JpaRepository

```java
public interface WordRepository extends JpaRepository<Word, String> {
```

> <mark>JpaRepository is an interface provided by Spring Data JPA</mark> that simplifies database operations.
> 
> It extends other repository interfaces, offering a complete set of CRUD (Create, Read, Update, Delete) operations, as well as paging and sorting capabilities.

An interface in Java is a contract that specifies a set of abstract methods that a class must implement. It defines what a class should do, without specifying how it should do it.

In the case of `WordRepository`, extending` JpaRepository` is a good idea because:

1. Automatic implementation: Spring Data JPA automatically generates the implementation of the repository interface at runtime, saving developers from writing boilerplate code.

2. Built-in methods: It provides common database operations like save(), findAll(), and deleteById() out of the box.

3. Custom queries: You can define custom query methods, as seen with getWordById() and getWordByPhoneticSpelling(), by simply declaring them in the interface.

4. Type safety: JpaRepository uses generics (<Word, String>), ensuring type safety for the entity (Word) and its ID type (String).

5. Extensibility: You can easily add more custom methods as your application's requirements grow.

### Queries

- [Lab#SB08-3: H2 and API Rest – albertprofe wiki](https://albertprofe.dev/springboot/sblab8-3.html#jpa-query-methods)

**JPA Derived Query Methods**

`Spring Data JPA` can automatically create queries based on method names in your repository interface.

```java
public interface UserRepository 
        extends JpaRepository<User, Long> {
    List<User> findByLastNameAndAge(String lastName, int age);
}
```

**@Query Annotation**

You can use the `@Query` annotation to define custom JPQL queries.

```java
public interface UserRepository 
        extends JpaRepository<User, Long> {
    @Query("SELECT u FROM User u WHERE u.emailAddress = ?1")
    User findByEmailAddress(String emailAddress);
}
```

**EntityManager with JPQL**

For more complex queries, you can use the `EntityManager` directly with JPQL.

```java
@PersistenceContext
private EntityManager entityManager;

public List<User> findUsersByAgeRange(int minAge, int maxAge) {
    String jpql = "SELECT u FROM User u WHERE u.age BETWEEN :minAge AND :maxAge";
    return entityManager.createQuery(jpql, User.class)
            .setParameter("minAge", minAge)
            .setParameter("maxAge", maxAge)
            .getResultList();
}
```

**Native SQL Queries**

When you need to use database-specific features, you can write native SQL queries.

```java
public interface UserRepository extends JpaRepository<User, Long> {
    @Query(value = "SELECT * FROM users WHERE status = ?1", nativeQuery = true)
    List<User> findUsersByStatus(int status);
}
```
