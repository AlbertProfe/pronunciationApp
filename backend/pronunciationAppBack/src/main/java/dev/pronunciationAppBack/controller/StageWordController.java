package dev.pronunciationAppBack.controller;

import dev.pronunciationAppBack.model.StageWord;
import dev.pronunciationAppBack.service.StageWordService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Date;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/stagewords")
public class StageWordController {

    @Autowired
    private StageWordService stageWordService;

    @GetMapping
    public ResponseEntity<List<StageWord>> getAllStageWords() {
        List<StageWord> stageWords = stageWordService.getAllStageWords();
        HttpHeaders headers = getCommonHeaders("Get all stage words");

        return !stageWords.isEmpty()
                ? new ResponseEntity<>(stageWords, headers, HttpStatus.OK)
                : new ResponseEntity<>(headers, HttpStatus.NOT_FOUND);
    }

    @GetMapping("/{id}")
    public ResponseEntity<StageWord> getStageWordById(@PathVariable String id) {
        Optional<StageWord> stageWord = stageWordService.getStageWordById(id);
        HttpHeaders headers = getCommonHeaders("Get stage word by ID");

        return stageWord.map(value -> new ResponseEntity<>(value, headers, HttpStatus.OK))
                .orElseGet(() -> new ResponseEntity<>(headers, HttpStatus.NOT_FOUND));
    }

    @PostMapping("/createStageWord")
    public ResponseEntity<StageWord> createStageWord(@RequestBody StageWord stageWord) {
        StageWord createdStageWord = stageWordService.createStageWord(stageWord);
        HttpHeaders headers = getCommonHeaders("Create a new stage word");

        return new ResponseEntity<>(createdStageWord, headers, HttpStatus.CREATED);
    }

    @PutMapping("/{id}")
    public ResponseEntity<StageWord> updateStageWord(@PathVariable String id, @RequestBody StageWord stageWord) {
        StageWord updatedStageWord = stageWordService.updateStageWord(stageWord);
        HttpHeaders headers = getCommonHeaders("Update a stage word");

        return new ResponseEntity<>(updatedStageWord, headers, HttpStatus.OK);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<String> deleteStageWord(@PathVariable("id") String idToDelete) {
        HttpHeaders headers = getCommonHeaders("Delete a stage word");

        if (stageWordService.existsById(idToDelete)) {
            stageWordService.deleteStageWord(idToDelete);
            return new ResponseEntity<>("Stage word deleted", headers, HttpStatus.OK);
        } else {
            return new ResponseEntity<>("Stage word not found", headers, HttpStatus.NOT_FOUND);
        }
    }

    @DeleteMapping
    public ResponseEntity<String> deleteAllStageWords() {
        stageWordService.deleteAllStageWords();
        HttpHeaders headers = getCommonHeaders("Delete all stage words");
        return new ResponseEntity<>("All stage words deleted", headers, HttpStatus.OK);
    }

    private HttpHeaders getCommonHeaders(String description) {
        HttpHeaders headers = new HttpHeaders();
        headers.add("desc", description);
        headers.add("content-type", "application/json");
        headers.add("date", new Date().toString());
        headers.add("server", "Spring Boot");
        headers.add("version", "1.0.0");
        headers.add("stage-word-count", String.valueOf(stageWordService.getStageWordCount()));
        headers.add("object", "stage-words");
        return headers;
    }
}
