package dev.pronunciationAppBack;

import com.fasterxml.jackson.databind.ObjectMapper;
import dev.pronunciationAppBack.model.User;
import dev.pronunciationAppBack.repository.UserRepository;
import dev.pronunciationAppBack.utilities.UserFakerGenerator;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.http.MediaType;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.RequestBuilder;
import org.springframework.test.web.servlet.ResultMatcher;

import java.util.List;

import static java.nio.file.Paths.get;
import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNotNull;
import static org.springframework.mock.http.server.reactive.MockServerHttpRequest.post;
import static org.springframework.test.web.client.match.MockRestRequestMatchers.content;
import static org.springframework.test.web.client.match.MockRestRequestMatchers.jsonPath;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

@SpringBootTest
@AutoConfigureMockMvc
class UserControllerIntegrationTest {
    @Autowired
    private MockMvc mockMvc;

    @Autowired
    private UserRepository userRepository;

    @Autowired
    UserFakerGenerator userFakerGenerator;

    @Test
    public void testGenerateUsers() {
        List<User> users = userFakerGenerator.generateUsers(5);

        assertNotNull(users);
        assertEquals(5, users.size());
        users.forEach(System.out::println);
    }

    @Test
    void testGetAllUsers() throws Exception {

        mockMvc.perform((RequestBuilder) get("/api/users"))
                .andExpect(status().isOk())
                .andExpect((ResultMatcher) content().contentType(MediaType.APPLICATION_JSON));
    }

    @Test
    void testCreateUser() throws Exception {
        User user = new User();
        user.setUserName("newUser");
        user.setEmail("newuser@example.com");

        mockMvc.perform((RequestBuilder) post("/api/users")
                        .contentType(MediaType.APPLICATION_JSON)
                        .contentType(MediaType.valueOf(new ObjectMapper().writeValueAsString(user))))
                .andExpect(status().isOk())
                .andExpect((ResultMatcher) jsonPath("$.username").value("newuser"));
    }
}
