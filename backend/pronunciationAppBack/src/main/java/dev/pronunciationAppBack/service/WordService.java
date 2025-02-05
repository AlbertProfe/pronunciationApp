package dev.pronunciationAppBack.service;
import java.util.List;
import java.util.UUID;

import dev.pronunciationAppBack.model.Word;

public interface WordService {
    List<Word> getAllWord();
    Word createWord(Word word);
    Word getWordById(UUID id);
    Word updateWord(UUID id, Word wordDetails);
    boolean deleteWord(UUID id);

    long countWords();

}
