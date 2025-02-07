package dev.pronunciationAppBack;

import dev.pronunciationAppBack.model.Word;
import dev.pronunciationAppBack.repository.WordRepository;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;
import org.springframework.boot.test.autoconfigure.orm.jpa.TestEntityManager;

import static org.assertj.core.api.Assertions.assertThat;

@DataJpaTest
public class PronunciationAppBackApplicationTests {

	@Autowired
	private TestEntityManager entityManager;

	@Autowired
	private WordRepository wordRepository;

	@Test
	public void testCreateWord() {
		Word word = new Word("1", "Example", "A thing characteristic of its kind", "ɪɡˈzæmpəl", "This is an example sentence.", true, 1);
		// assign the word object to the repository and save to H2
		Word savedWord = wordRepository.save(word);
		assertThat(savedWord).isNotNull();
		assertThat(savedWord.getId()).isEqualTo("1");
	}

	@Test
	public void testReadWord() {
		Word word = new Word("2", "Test", "A procedure to evaluate", "test", "This is a test sentence.", true, 2);
		entityManager.persist(word);

		Word foundWord = wordRepository.findById("2").orElse(null);
		assertThat(foundWord).isNotNull();
		assertThat(foundWord.getWordName()).isEqualTo("Test");
	}

	@Test
	public void testUpdateWord() {
		Word word = new Word("3", "Update", "To bring up to date", "ˈʌpdeɪt", "This word will be updated.", true, 3);
		entityManager.persist(word);

		Word wordToUpdate = wordRepository.findById("3").orElse(null);
		assertThat(wordToUpdate).isNotNull();
		wordToUpdate.setDefinition("To make something more modern or up to date");
		wordRepository.save(wordToUpdate);

		Word updatedWord = wordRepository.findById("3").orElse(null);
		assertThat(updatedWord).isNotNull();
		assertThat(updatedWord.getDefinition()).isEqualTo("To make something more modern or up to date");
	}

	@Test
	public void testDeleteWord() {
		Word word = new Word("4", "Delete", "To remove or erase", "dɪˈliːt", "This word will be deleted.", true, 4);
		entityManager.persist(word);

		wordRepository.deleteById("4");

		Word deletedWord = wordRepository.findById("4").orElse(null);
		assertThat(deletedWord).isNull();
	}
}
