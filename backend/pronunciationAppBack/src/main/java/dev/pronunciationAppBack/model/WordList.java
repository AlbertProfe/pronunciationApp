package dev.pronunciationAppBack.model;

import lombok.Getter;

import java.util.List;

@Getter
public class WordList {
    private List<Word> words;

    public WordList() {}

    public WordList(List<Word> words) {
        this.words = words;
    }

    public void setWords(List<Word> words) {
        this.words = words;
    }
}