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