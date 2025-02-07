package dev.pronunciationAppBack.service;

import dev.pronunciationAppBack.model.StageWord;
import dev.pronunciationAppBack.repository.StageWordRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class StageWordService {

    @Autowired
    private StageWordRepository stageWordRepository;

    public List<StageWord> getAllStageWords() {
        return stageWordRepository.findAll();
    }

    public Optional<StageWord> getStageWordById(String id) {
        return stageWordRepository.findById(id);
    }

    public StageWord createStageWord(StageWord stageWord) {
        return stageWordRepository.save(stageWord);
    }

    public StageWord updateStageWord(StageWord stageWord) {
        return stageWordRepository.save(stageWord);
    }

    public void deleteStageWord(String id) {
        stageWordRepository.deleteById(id);
    }

    public void deleteAllStageWords() {
        stageWordRepository.deleteAll();
    }

    public boolean existsById(String id) {
        return stageWordRepository.existsById(id);
    }

    public long getStageWordCount() {
        return stageWordRepository.count();
    }

    // Additional business logic can be added here
    public List<StageWord> getStageWordsByStatus(StageWord.Status status) {
        return stageWordRepository.findByStatus(status);
    }
}
