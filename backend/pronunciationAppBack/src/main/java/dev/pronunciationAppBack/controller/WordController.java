package dev.pronunciationAppBack.controller;


import dev.pronunciationAppBack.model.Word;
import dev.pronunciationAppBack.repository.WordRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import java.util.List;

@RequestMapping("/api/v1/words")
@RestController
public class WordController {

    @Value("${endpoint.url.words}")
    private String endpointUrlWords;

    @Autowired
    public WordRepository wordRepository;

    @GetMapping("/show-endpoint")
    public String showEndPointWords() {
        return "The Words endpoint URL is: " + endpointUrlWords;
    }

    @GetMapping("/words")
    public List<Word> getWords() {
            //
            List<Word> words = wordRepository.findAll();
            System.out.println("Number of words: " + words.size());
            for (Word word : words) {
                System.out.println("Word: " + word);
            }
            return words;

    }

}
