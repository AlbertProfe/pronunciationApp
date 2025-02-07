package dev.pronunciationAppBack.repository;

import dev.pronunciationAppBack.model.StageWord;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface StageWordRepository extends JpaRepository<StageWord, String>  {
    List<StageWord> findByStatus(StageWord.Status status);
}
