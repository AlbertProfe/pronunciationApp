package dev.pronunciationAppBack.controller;

import dev.pronunciationAppBack.model.Word;
import dev.pronunciationAppBack.repository.WordRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

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
    public WordRepository wordRepository;

    // maps the endpoint url to the method with the right operation: get
    @GetMapping("/hello")
    public String hello() {
        return "hello Emiliano, are you sleeping?";
    }

    @GetMapping
    // method signature (declaration): return the list of words to the view
    public List<Word> getAllWords() {
            // assign the words from the repository to the list words
            List<Word> words = wordRepository.findAll();
            System.out.println("Number of words: " + words.size());
            for (Word word : words) {
                System.out.println("Word: " + word);
            }
            return words;
    }

    @GetMapping("/{id}")
    public Word getWordById(@PathVariable String id) {
        return wordRepository.getWordById(id);
    }

    @PostMapping
    public Word createWord(@RequestBody Word word) {
        return wordRepository.save(word);
    }


    @PutMapping("/{id}")
    public Word updateWord(@PathVariable String id, @RequestBody Word word) {
        return wordRepository.save(word);
    }

    @DeleteMapping("/words/{id}")
    public String deleteWord(String id) {
        wordRepository.deleteById(id);
        return "Word deleted";
    }



}
