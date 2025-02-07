package dev.pronunciationAppBack.controller;

import dev.pronunciationAppBack.model.Word;
import dev.pronunciationAppBack.service.WordService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Date;
import java.util.List;
import java.util.Optional;

// a kind of controller that connects the view with the business logic
// the business logic is at service where the core operations are done
// rest controller just works with rest and JSON
// controller works html and templates, for example: TH
@RestController
@RequestMapping("/api/words")
public class WordController {
    // dependency injection: boot creates the object and injects it,
    // it also manages all the lifecycle
    // the real goal is to connect the controller with the repository
    @Autowired
    public WordService wordService;


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
