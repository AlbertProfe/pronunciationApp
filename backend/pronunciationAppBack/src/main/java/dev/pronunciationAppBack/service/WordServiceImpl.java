package dev.pronunciationAppBack.service;

import dev.pronunciationAppBack.model.Word;
import dev.pronunciationAppBack.repository.WordRepository;
import org.springframework.beans.factory.annotation.Autowired;

import java.util.List;
import java.util.UUID;

public class WordServiceImpl implements WordServiceInterface{
    @Autowired
    private WordRepository wordRepository;

    @Override
    public List<Word> getAllWord() {
        return wordRepository.findAll();
    }

    @Override
    public Word createWord(Word word) {
        word.setId(UUID.randomUUID().toString());
        return wordRepository.save(word);
    }

    @Override
    public Word getWordById(UUID id) {
        return wordRepository.findById(id).orElse(null);
    }

    @Override
    public Word updateWord(UUID id, Word wordDetails) {
        Word word = wordRepository.findById(id).orElse(null);
        if (word != null) {
            word.setWordName(wordDetails.getWordName());
            word.setDefinition(wordDetails.getDefinition());
            word.setPhoneticSpelling(wordDetails.getPhoneticSpelling());
            word.setSentence(wordDetails.getSentence());
            word.setActive(wordDetails.isActive());
            word.setLevel(wordDetails.getLevel());
            return wordRepository.save(word);
        }
        return null;
    }

    @Override
    public boolean deleteWord(UUID id) {
        if (wordRepository.existsById(id)){
            wordRepository.deleteById(id);
            System.out.println("Deleted successfully!");
            return true;
        }
        System.out.println("ID doesn't exist!");
        return false;
    }

    @Override
    public long countWords() {
        return wordRepository.count();
    }
}
