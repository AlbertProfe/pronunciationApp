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
        return wordRepository.findById(id);
    }

    public List<Word> getWordsByLevel(String level) {
        return (List<Word>) wordRepository.getWordsByLevel(level);
    }

    public Word createWord(Word word) {
        return wordRepository.save(word);
    }

    public Word updateWord(String id, Word word) {
        if (wordRepository.existsById(id)) {
            word.setId(id);
            return wordRepository.save(word);
        }
        return null;
    }

    public void deleteWord(String id) {
        if (wordRepository.existsById(id)) {
            wordRepository.deleteById(id);
        }
    }

    public void deleteAllWords() {
        wordRepository.deleteAll();
    }
}