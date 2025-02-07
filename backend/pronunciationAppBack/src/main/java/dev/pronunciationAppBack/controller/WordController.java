package dev.pronunciationAppBack.controller;


import dev.pronunciationAppBack.model.Word;
import dev.pronunciationAppBack.repository.WordRepository;
import dev.pronunciationAppBack.service.WordService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.web.bind.annotation.*;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;



import java.util.Date;
import java.util.List;
import java.util.UUID;

@RequestMapping("/api/v1/words")
@RestController
public class WordController {

    @Value("${endpoint.url.words}")
    private String endpointUrlWords;

    @Autowired
    public WordService wordService;

    @GetMapping("/show-endpoint")
    public String showEndPointWords() {
        return "The Words endpoint URL is: " + endpointUrlWords;
    }

    @GetMapping("/allWords")
    public ResponseEntity<List<Word>> getAllWords() {

        List<Word> words = wordService.getAllWords();
        HttpHeaders headers = getCommonHeaders("Get all customers");
        System.out.println("Number of words: " + words.size());
        for (Word word : words) {
            System.out.println("Word: " + word);
        }
        return !words.isEmpty()
                ? new ResponseEntity<>(words, headers, HttpStatus.OK)
                : new ResponseEntity<>(headers, HttpStatus.NOT_FOUND);

    }

    @PostMapping
    public ResponseEntity<Word> createWord(@RequestBody Word word) {
        Word createdWord = wordService.createWord(word);
        HttpHeaders headers = getCommonHeaders("Create a new word");
    return createdWord != null
            ? new ResponseEntity<>(createdWord, headers, HttpStatus.CREATED)
            : new ResponseEntity<>(headers, HttpStatus.BAD_REQUEST);
    }

   @PutMapping("/{id}")
    public ResponseEntity<Word> updateWord(@PathVariable("id") String id, @RequestBody Word word) {
        Word updatedWord = wordService.updateWord(id, word);
        HttpHeaders headers = getCommonHeaders("Update a word");
        return updatedWord != null
                ? new ResponseEntity<>(updatedWord, headers, HttpStatus.OK)
                : new ResponseEntity<>(headers, HttpStatus.NOT_FOUND);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Word> deleteWord(@PathVariable("id") String id) {
        boolean deleted = wordService.deleteWord(id);
        HttpHeaders headers = getCommonHeaders("Delete a word");
        return deleted
                ? new ResponseEntity<>(headers, HttpStatus.OK)
                : new ResponseEntity<>(headers, HttpStatus.NOT_FOUND);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Word> getWordById(@PathVariable("id") String id) {
        Word word = wordService.getWordById(id);
        HttpHeaders headers = getCommonHeaders("Get a word");
        return word != null
                ? new ResponseEntity<>(word, headers, HttpStatus.OK)
                : new ResponseEntity<>(headers, HttpStatus.NOT_FOUND);
    }

    private HttpHeaders getCommonHeaders(String description) {
        HttpHeaders headers = new HttpHeaders();
        headers.add("description", description);
        headers.add("content-type", "application/json");
        headers.add("date", new Date().toString());
        headers.add("server", "H2 Database");
        headers.add("version", "1.0.0");
        headers.add("word-count", String.valueOf(wordService.countWords()));
        headers.add("object", "words");

        return headers;
    }

}
