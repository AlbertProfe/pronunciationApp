package dev.pronunciationAppBack.repository;

import dev.pronunciationAppBack.model.Word;
import org.springframework.data.jpa.repository.JpaRepository;


public interface WordRepository extends JpaRepository<Word, String> {
    Word getWordById(String id);
}
