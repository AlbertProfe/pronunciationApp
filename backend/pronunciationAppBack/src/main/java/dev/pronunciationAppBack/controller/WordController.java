package dev.pronunciationAppBack.controller;

import dev.pronunciationAppBack.model.Word;
import dev.pronunciationAppBack.model.WordList;
import dev.pronunciationAppBack.model.User;
import dev.pronunciationAppBack.repository.WordRepository;
import dev.pronunciationAppBack.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Date;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/words")
public class WordController {

    @Autowired
    private WordRepository wordRepository;

    @Autowired
    private UserRepository userRepository;

    @GetMapping
    public ResponseEntity<List<Word>> getAllWords() {
        List<Word> words = wordRepository.findAll();
        HttpHeaders headers = getCommonHeaders("Get all words");

        return !words.isEmpty()
                ? new ResponseEntity<>(words, headers, HttpStatus.OK)
                : new ResponseEntity<>(headers, HttpStatus.NOT_FOUND);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Word> getWordById(@PathVariable String id) {
        Optional<Word> word = Optional.ofNullable(wordRepository.getWordById(id));
        HttpHeaders headers = getCommonHeaders("Get word by ID");

        return word.map(value -> new ResponseEntity<>(value, headers, HttpStatus.OK))
                .orElseGet(() -> new ResponseEntity<>(headers, HttpStatus.NOT_FOUND));
    }



    @GetMapping("/{level}")
    public ResponseEntity<WordList> getWordsByLevel(@PathVariable String level) {
        List<Word> words = (List<Word>) wordRepository.getWordsByLevel(level);
        HttpHeaders headers = getCommonHeaders("Get words by level");

        return !words.isEmpty()
                ? new ResponseEntity<>(new WordList(words), headers, HttpStatus.OK)
                : new ResponseEntity<>(headers, HttpStatus.NOT_FOUND);
    }

    @GetMapping("/user/{id}")
    public ResponseEntity<User> getUserById(@PathVariable Long id) {
        Optional<User> user = userRepository.findById(id);
        HttpHeaders headers = getCommonHeaders("Get user by ID");

        return user.map(value -> new ResponseEntity<>(value, headers, HttpStatus.OK))
                .orElseGet(() -> new ResponseEntity<>(headers, HttpStatus.NOT_FOUND));
    }



    @PostMapping("/createWord")
    public ResponseEntity<Word> createWord(@RequestBody Word word) {
        Word createdWord = wordRepository.save(word);
        HttpHeaders headers = getCommonHeaders("Create a new word");

        return new ResponseEntity<>(createdWord, headers, HttpStatus.CREATED);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Word> updateWord(@PathVariable String id, @RequestBody Word word) {
        Word updatedWord = wordRepository.save(word);
        HttpHeaders headers = getCommonHeaders("Update a word");

        return new ResponseEntity<>(updatedWord, headers, HttpStatus.OK);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<String> deleteWord(@PathVariable("id") String idToDelete) {
        HttpHeaders headers = getCommonHeaders("Delete a word");

        if (wordRepository.existsById(idToDelete)) {
            wordRepository.deleteById(idToDelete);
            return new ResponseEntity<>("Word deleted", headers, HttpStatus.OK);
        } else {
            return new ResponseEntity<>("Word not found", headers, HttpStatus.NOT_FOUND);
        }
    }

    @DeleteMapping
    public ResponseEntity<String> deleteAllWords() {
        wordRepository.deleteAll();
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
        headers.add("word-count", String.valueOf(wordRepository.count()));
        headers.add("object", "words");
        return headers;
    }
}
