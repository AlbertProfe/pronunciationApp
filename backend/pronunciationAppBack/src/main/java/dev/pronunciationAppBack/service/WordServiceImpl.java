package dev.pronunciationAppBack.service;

import dev.pronunciationAppBack.model.Word;
import dev.pronunciationAppBack.repository.WordRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.UUID;
@Service
public class WordServiceImpl implements WordService {
    @Autowired
    private WordRepository wordRepository;

    @Override
    public List<Word> getAllWords() {

        return wordRepository.findAll();
    }

    @Override
    public Word createWord(Word word) {
        word.setId(UUID.randomUUID().toString());
        return wordRepository.save(word);
    }

    @Override
    public Word getWordById(String id) {
        return wordRepository.findById(id).orElse(null);
    }

    @Override
    public Word updateWord(String id, Word wordDetails) {
        Word word = wordRepository.findById(id).orElse(null);
        if (word != null) {
            if (wordDetails.getWordName() != null) {
                word.setWordName(wordDetails.getWordName());
            }
            if (wordDetails.getDefinition() != null){
                word.setDefinition(wordDetails.getDefinition());
            }
            if (wordDetails.getPhoneticSpelling() != null){
                word.setPhoneticSpelling(wordDetails.getPhoneticSpelling());
            }
            if (wordDetails.getSentence() != null){
                word.setSentence(wordDetails.getSentence());
            }
            if (wordDetails.isActive()){
                word.setActive(wordDetails.isActive());
            }
            if (wordDetails.getLevel() != 0){
                word.setLevel(wordDetails.getLevel());
            }

            return wordRepository.save(word);
        }
        return null;
    }

    @Override
    public boolean deleteWord(String id) {
        if (wordRepository.existsById(id)){
            wordRepository.deleteById(id);
            System.out.println("Deleted successfully!");
            return true;
        }
        System.out.println("ID doesn't exist!");
        return false;
    }

    public long countWords() {
        return wordRepository.count();
    }
}
