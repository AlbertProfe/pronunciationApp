package dev.pronunciationAppBack.service;
import java.util.List;
import dev.pronunciationAppBack.model.Word;

public interface WordServiceInterface {
    List<Word> getAllWord();
    Word createWord(Word word);
    Word getWordById(String id);
    Word updateWord(String id, Word wordDetails);
    boolean deleteWord(String id);
    long countWords();
}
