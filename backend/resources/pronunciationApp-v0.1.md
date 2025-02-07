# PronunciationApp Backend v0.1

## Project

- pronunciationApp Backend **GitHub** [code](https://github.com/AlbertProfe/pronunciationApp/tree/backend-spring-boot/backend/pronunciationAppBack)

- pronunciatoinApp Backend [resources](https://github.com/AlbertProfe/pronunciationApp/tree/backend-spring-boot/backend/resources) **documentation**

### Project Structure

A Spring Boot backend application for the `Pronunciation App`, using:

- H2 Database (local file-based or memory for certain purposes)
- `Spring Data JPA`
- <mark>REST Controller</mark>
- Service Layer
- Entity Mapping: `@Entity`

### Dependencies

Add these to your `pom.xml`:

```xml
<dependencies>
    <dependency>
        <groupId>org.springframework.boot</groupId>
        <artifactId>spring-boot-starter-data-jpa</artifactId>
    </dependency>
    <dependency>
        <groupId>org.springframework.boot</groupId>
        <artifactId>spring-boot-starter-web</artifactId>
    </dependency>
    <dependency>
        <groupId>com.h2database</groupId>
        <artifactId>h2</artifactId>
        <scope>runtime</scope>
    </dependency>
</dependencies>
```

### Entity

`Word.java`:

```java
package com.pronunciationapp.model;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;

@Entity
public class Word {

    @Id
    private String id;
    private String wordName;
    private String definition;
    private String phoneticSpelling;
    private String sentence;
    private boolean isActive;
    private int level;

    // Constructors
    public Word() {}

    public Word(String id, String wordName, String definition, 
                String phoneticSpelling, String sentence, 
                boolean isActive, int level) {
        this.id = id;
        this.wordName = wordName;
        this.definition = definition;
        this.phoneticSpelling = phoneticSpelling;
        this.sentence = sentence;
        this.isActive = isActive;
        this.level = level;
    }

    // Getters and Setters
    // ... (generate these for all fields)
}
```

### Repository

`WordRepository.java`:

```java
package com.pronunciationapp.repository;

import com.pronunciationapp.model.Word;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface WordRepository extends JpaRepository<Word, String> {
    List<Word> findByIsActiveTrue();
    List<Word> findByLevel(int level);
    Word findByWordName(String wordName);
}
```

### Service

`WordService.java`:

```java
package com.pronunciationapp.service;

import com.pronunciationapp.model.Word;
import com.pronunciationapp.repository.WordRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

@Service
public class WordService {

    @Autowired
    private WordRepository wordRepository;

    public List<Word> getAllWords() {
        return wordRepository.findAll();
    }

    public Optional<Word> getWordById(String id) {
        return wordRepository.findById(id);
    }

    public Word createWord(Word word) {
        if (word.getId() == null) {
            word.setId(UUID.randomUUID().toString());
        }
        return wordRepository.save(word);
    }

    public Word updateWord(String id, Word wordDetails) {
        Word word = wordRepository.findById(id)
            .orElseThrow(() -> new RuntimeException("Word not found"));

        word.setWordName(wordDetails.getWordName());
        word.setDefinition(wordDetails.getDefinition());
        word.setPhoneticSpelling(wordDetails.getPhoneticSpelling());
        word.setSentence(wordDetails.getSentence());
        word.setActive(wordDetails.isActive());
        word.setLevel(wordDetails.getLevel());

        return wordRepository.save(word);
    }

    public void deleteWord(String id) {
        Word word = wordRepository.findById(id)
            .orElseThrow(() -> new RuntimeException("Word not found"));
        wordRepository.delete(word);
    }

    public List<Word> getActiveWords() {
        return wordRepository.findByIsActiveTrue();
    }

    public List<Word> getWordsByLevel(int level) {
        return wordRepository.findByLevel(level);
    }
}
```

### REST Controller

`WordController.java`:

```java
package com.pronunciationapp.controller;

import com.pronunciationapp.model.Word;
import com.pronunciationapp.service.WordService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/words")
public class WordController {

    @Autowired
    private WordService wordService;

    @GetMapping
    public List<Word> getAllWords() {
        return wordService.getAllWords();
    }

    @GetMapping("/{id}")
    public ResponseEntity<Word> getWordById(@PathVariable String id) {
        return wordService.getWordById(id)
            .map(ResponseEntity::ok)
            .orElse(ResponseEntity.notFound().build());
    }

    @PostMapping
    public Word createWord(@RequestBody Word word) {
        return wordService.createWord(word);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Word> updateWord(
        @PathVariable String id, 
        @RequestBody Word wordDetails
    ) {
        Word updatedWord = wordService.updateWord(id, wordDetails);
        return ResponseEntity.ok(updatedWord);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteWord(@PathVariable String id) {
        wordService.deleteWord(id);
        return ResponseEntity.ok().build();
    }

    @GetMapping("/active")
    public List<Word> getActiveWords() {
        return wordService.getActiveWords();
    }

    @GetMapping("/level/{level}")
    public List<Word> getWordsByLevel(@PathVariable int level) {
        return wordService.getWordsByLevel(level);
    }
}
```

### Application Properties

`application.properties`:

```properties
spring.application.name=pronunciationAppBack

# H2 DATABASE SERVER
spring.datasource.driverClassName=org.h2.Driver
spring.jpa.database-platform=org.hibernate.dialect.H2Dialect
spring.h2.console.enabled=true

# H2 LOCAL DB SERVER
spring.datasource.url=jdbc:h2:/home/albert/MyProjects/DataBase/pronunciationDB/pronunciationDB.db
spring.datasource.username=albert
spring.datasource.password=1234

# DDL OPTIONS: create-drop, create, update, none, validate
spring.jpa.hibernate.ddl-auto=update

# Enable H2 web console
spring.h2.console.path=/h2-console
```

## Testing with Postman

Sample JSON for testing:

```json
{
    "words": [
        {
            "id": "8b9248a4e0b64bbccf82e7723a3734279bf9bbc4",
            "wordName": "benevolent",
            "definition": "Kind and generous",
            "phoneticSpelling": "/bɪˈnɛvələnt/",
            "sentence": "Her benevolent actions helped many people in need.",
            "isActive": true,
            "level": 2
        },
        {
            "id": "3a7bd3e2a07e8c7e9b6e0d2c1f4a5b8d9c0e3f2",
            "wordName": "serendipity",
            "definition": "A fortunate discovery",
            "phoneticSpelling": "/ˌserənˈdɪpɪti/",
            "sentence": "Meeting her was pure serendipity.",
            "isActive": true,
            "level": 3
        }
    ]
}
```

### Postman Collection Setup

Create a new collection for `PronunciationApp` with these CRUD endpoints:

1. **GET All Words**
   
   - Method: GET
   - URL: `http://localhost:8080/api/words`
   - Expected: Returns full list of words

2. **GET Word by ID**
   
   - Method: GET
   - URL: `http://localhost:8080/api/words/{id}`
   - Params: Replace `{id}` with a specific word ID
   - Expected: Returns single word details

3. **POST Create Word**
   
   - Method: POST
   
   - URL: `http://localhost:8080/api/words`
   
   - Body (raw JSON):
     
     ```json
     {
         "wordName": "ephemeral",
         "definition": "Lasting for a very short time",
         "phoneticSpelling": "/ɪˈfɛmərəl/",
         "sentence": "The beauty of cherry blossoms is ephemeral.",
         "isActive": true,
         "level": 2
     }
     ```
   
   - Expected: Returns created word with auto-generated ID

4. **PUT Update Word**
   
   - Method: PUT
   
   - URL: `http://localhost:8080/api/words/{id}`
   
   - Params: Replace `{id}` with existing word ID
   
   - Body (raw JSON):
     
     ```json
     {
         "wordName": "ephemeral",
         "definition": "Lasting for a very short time",
         "phoneticSpelling": "/ɪˈfɛmərəl/",
         "sentence": "The beauty of cherry blossoms is ephemeral.",
         "isActive": false,
         "level": 3
     }
     ```
   
   - Expected: Returns updated word

5. **DELETE Word**
   
   - Method: DELETE
   - URL: `http://localhost:8080/api/words/{id}`
   - Params: Replace `{id}` with word ID to delete
   - Expected: 200 OK response

### Additional Test Endpoints

- **GET Active Words**: `http://localhost:8080/api/words/active`
- **GET Words by Level**: `http://localhost:8080/api/words/level/2`

### Testing Workflow

1. Import collection in Postman
2. Start Spring Boot application
3. Execute requests in sequence
4. Verify responses match expected results

### Common Testing Scenarios

- Test creating words with missing fields
- Validate ID generation
- Check level and active status constraints
- Test boundary conditions (max/min levels)

## Running the Application

1. Ensure you have Java 17+ and Maven installed
2. Configure the database path in `application.properties`
3. Run the Spring Boot application
4. <mark>Access H2</mark> console at `http://localhost:8080/h2-console`
5. Access API endpoints at `http://localhost:8080/api/words`

## Notes

- The application uses a **local**<mark> H2 database file</mark>
- <mark>UUID is used for generating unique word IDs</mark>
- Basic CRUD operations are implemented
- Additional **query methods are available in the repository** and service layers
