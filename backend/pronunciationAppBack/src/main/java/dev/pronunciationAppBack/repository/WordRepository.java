package dev.pronunciationAppBack.repository;

import dev.pronunciationAppBack.model.Word;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.UUID;


public interface WordRepository extends JpaRepository<Word, String> {
}
