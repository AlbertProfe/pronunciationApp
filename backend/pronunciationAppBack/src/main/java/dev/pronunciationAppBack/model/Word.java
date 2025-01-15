package dev.pronunciationAppBack.model;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import lombok.*;

@Getter
@Setter
@Data
//@AllArgsConstructor
//@NoArgsConstructor
@Entity
public class Word {

    @Id
    private String id;
    private String wordName;
    private String definition;
    private String phoneticSpelling;
    private String sentence;
    private boolean isActive;
    private int level;

    public Word() {}

    public Word(String id, String wordName, String definition, String phoneticSpelling, String sentence, boolean isActive, int level) {
        this.id = id;
        this.wordName = wordName;
        this.definition = definition;
        this.phoneticSpelling = phoneticSpelling;
        this.sentence = sentence;
        this.isActive = isActive;
        this.level = level;
    }

    public void setActive(boolean active) {
        isActive = active;
    }

    @Override
    public String toString() {
        return "Word{" +
                "id='" + id + '\'' +
                ", wordName='" + wordName + '\'' +
                ", definition='" + definition + '\'' +
                ", phoneticSpelling='" + phoneticSpelling + '\'' +
                ", sentence='" + sentence + '\'' +
                ", isActive=" + isActive +
                ", level=" + level +
                '}';
    }
}
