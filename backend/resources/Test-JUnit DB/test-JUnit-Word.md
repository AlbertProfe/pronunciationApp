# Test JUnit Word H2 DB

## Test

Here are 4 simple test cases for CRUD operations using `JUnit` and `Spring Boot` for the Word `entity`:

```java
package dev.pronunciationAppBack;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;
import org.springframework.boot.test.autoconfigure.orm.jpa.TestEntityManager;

import static org.assertj.core.api.Assertions.assertThat;

@DataJpaTest
public class WordRepositoryTest {

    @Autowired
    private TestEntityManager entityManager;

    @Autowired
    private WordRepository wordRepository;

    @Test
    public void testCreateWord() {
        Word word = new Word("1", "Example", "A thing characteristic of its kind", "ɪɡˈzæmpəl", "This is an example sentence.", true, 1);
        Word savedWord = wordRepository.save(word);
        assertThat(savedWord).isNotNull();
        assertThat(savedWord.getId()).isEqualTo("1");
    }

    @Test
    public void testReadWord() {
        Word word = new Word("2", "Test", "A procedure to evaluate", "test", "This is a test sentence.", true, 2);
        entityManager.persist(word);

        Word foundWord = wordRepository.findById("2").orElse(null);
        assertThat(foundWord).isNotNull();
        assertThat(foundWord.getWordName()).isEqualTo("Test");
    }

    @Test
    public void testUpdateWord() {
        Word word = new Word("3", "Update", "To bring up to date", "ˈʌpdeɪt", "This word will be updated.", true, 3);
        entityManager.persist(word);

        Word wordToUpdate = wordRepository.findById("3").orElse(null);
        assertThat(wordToUpdate).isNotNull();
        wordToUpdate.setDefinition("To make something more modern or up to date");
        wordRepository.save(wordToUpdate);

        Word updatedWord = wordRepository.findById("3").orElse(null);
        assertThat(updatedWord).isNotNull();
        assertThat(updatedWord.getDefinition()).isEqualTo("To make something more modern or up to date");
    }

    @Test
    public void testDeleteWord() {
        Word word = new Word("4", "Delete", "To remove or erase", "dɪˈliːt", "This word will be deleted.", true, 4);
        entityManager.persist(word);

        wordRepository.deleteById("4");

        Word deletedWord = wordRepository.findById("4").orElse(null);
        assertThat(deletedWord).isNull();
    }
}
```

These test cases cover the basic CRUD (Create, Read, Update, Delete) operations for the Word entity. Here's a brief explanation of each test:

1. `testCreateWord`: Tests the creation of a new Word entity.
2. `testReadWord`: Tests reading a Word entity from the database.
3. `testUpdateWord`: Tests updating an existing Word entity.
4. `testDeleteWord`: Tests deleting a Word entity from the database.

## Repository

Note that these tests assume you have a `WordRepository` interface that extends `JpaRepository<Word, String>`. You'll need to create this interface in your project:

```java
package dev.pronunciationAppBack;

import org.springframework.data.jpa.repository.JpaRepository;

public interface WordRepository extends JpaRepository<Word, String> {
}
```

Also, make sure you have the necessary dependencies in your `pom.xml` or `build.gradle` file for Spring Boot Test and JPA Test.

## H2 and application.properties

> For these JUnit tests to run properly with an in-memory database, we need to add the `H2 database` dependency and configure the `application.properties` file.

Here's what you need to add:

1. H2 Database Dependency:
   Add this to your `pom.xml` if you're using Maven:

```xml
<dependency>
    <groupId>com.h2database</groupId>
    <artifactId>h2</artifactId>
    <scope>test</scope>
</dependency>
```

Or if you're using Gradle, add this to your `build.gradle`:

```gradle
dependencies {
    testImplementation 'com.h2database:h2'
}
```

2. Application Properties:
   Create a file named `application.properties` in your `src/test/resources` directory with the following content:

```properties
spring.datasource.url=jdbc:h2:mem:testdb
spring.datasource.driverClassName=org.h2.Driver
spring.datasource.username=sa
spring.datasource.password=password
spring.jpa.database-platform=org.hibernate.dialect.H2Dialect

spring.jpa.hibernate.ddl-auto=create-drop
spring.jpa.show-sql=true
```

These settings will:

- Configure an **in-memory H2 database for testing**
- Set up the database to create tables based on your entities and drop them after the tests
- Show SQL statements in the console, which can be helpful for debugging



## Local DB



First you must create the DB:

```properties
# DDL OPTIONS: create-drop, create, update, none, validate
spring.jpa.hibernate.ddl-auto=create
```

Once created, change DDL to <mark>none</mark>

```properties
spring.application.name=pronunciationAppBack

# H2 DATABASE SERVER
spring.datasource.driverClassName=org.h2.Driver
spring.jpa.database-platform=org.hibernate.dialect.H2Dialect
spring.h2.console.enabled=true

# H2 IN MEMORY
#spring.datasource.url=jdbc:h2:mem:testdb
#spring.datasource.username=sa
#spring.datasource.password=


# H2 LOCAL DB SERVER
spring.datasource.url=jdbc:h2:/home/albert/MyProjects/DataBase/pronunciationDB/pronunciationDB.db
spring.datasource.username=albert
spring.datasource.password=1234

# DDL OPTIONS: create-drop, create, update, none, validate
spring.jpa.hibernate.ddl-auto=none
```
