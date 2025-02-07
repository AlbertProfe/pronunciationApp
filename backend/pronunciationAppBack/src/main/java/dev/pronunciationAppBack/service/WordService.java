package dev.pronunciationAppBack.service;
import java.util.List;
import java.util.UUID;

import dev.pronunciationAppBack.model.Word;

public interface WordService {
    List<Word> getAllWords();
    Word createWord(Word word);
    Word getWordById(String id);
    Word updateWord(String id, Word wordDetails);
    boolean deleteWord(String id);
    long countWords();

}
