# Param vs Path Variable

## Using @DeleteMapping in Spring Boot with Postman

Spring Boot's `@DeleteMapping` annotation simplifies the process of handling HTTP DELETE requests.

> The `@DeleteMapping` annotation in Spring Boot provides a clean and efficient way to handle DELETE requests. Whether you choose to use path variables or query parameters depends on your API design preferences and requirements. Postman is an excellent tool for testing these endpoints, allowing you to easily send DELETE requests and verify the results.

## DeleteWord Example

Here's a simple example of a delete operation in a Spring Boot controller:

```java
@RestController
@RequestMapping("/words")
public class WordController {

    @Autowired
    private WordRepository wordRepository;

    @DeleteMapping("/{id}")
    public String deleteWord(@PathVariable("id") String idToDelete) {
        wordRepository.deleteById(idToDelete);
        return "Word deleted";
    }
}
```

In this example, the `deleteWord` method is mapped to handle DELETE requests to the `/words/{id}` endpoint[1][4]. The `@PathVariable` annotation binds the `id` from the URL to the `idToDelete` parameter[3].

## Testing with Postman

To test this endpoint using Postman, follow these steps:

1. Open Postman and create a new request.
2. Set the HTTP method to DELETE.
3. Enter the URL: `http://localhost:8080/words/{id}` (replace `{id}` with the actual ID you want to delete).
4. Click the "Send" button to execute the request.

### Using Path Variable

For our `deleteWord` example, we're using a path variable. The ID is part of the URL path:

```
DELETE http://localhost:8080/words/123
```

Here, `123` is the ID of the word to be deleted[5].

### Using Query Parameter (Alternative Approach)

While our example uses a path variable, you could also design your endpoint to use a query parameter:

```java
@DeleteMapping
public String deleteWord(@RequestParam("id") String idToDelete) {
    wordRepository.deleteById(idToDelete);
    return "Word deleted";
}
```

To test this with Postman:

1. Set the URL to `http://localhost:8080/words`
2. Add a query parameter: Key: `id`, Value: `123`
3. The full URL will look like: `http://localhost:8080/words?id=123`
