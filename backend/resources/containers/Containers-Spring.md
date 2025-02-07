# Popular Containers in Spring Boot

> Containers in Java are typically defined by their ability to hold and manage collections of objects or references. 

However, for example, List`and`Optional` serve fundamentally different purposes:

- `List` is a<mark> collection container</mark> designed to store multiple elements with order and allow dynamic manipulation.
- `Optional` is a <mark>wrapper</mark> to explicitly handle the presence or absence of a single value, preventing null reference issues.

While both can "contain" elements, they solve distinct programming challenges: data storage versus null-safety management.

#### Wrapper and Collection

> A **wrapper** is a layer of code that "wraps around" something simpler, adding extra functionality or protection. Like a protective cover that makes something easier to use or more powerful. 
> 
> In Java, a wrapper takes a basic object or value and provides additional methods or behaviors to interact with it more conveniently.



> A **Collection** is a more structured way of storing and managing those items, with methods to add, remove, and manipulate the group of elements.
> 
> An **Iterable** is something you can loop through, like a collection of items.
> 
> 

**Container Comparison: List vs Optional**

| Characteristic       | List<T>                         | Optional<T>                                 |
| -------------------- | ------------------------------- | ------------------------------------------- |
| **Purpose**          | Store multiple elements         | Represent optional value                    |
| **Nullability**      | Can contain null elements       | Explicitly prevents null                    |
| **Size**             | Dynamic, variable length        | Always contains 0 or 1 element              |
| **Mutability**       | Mutable (add/remove elements)   | Immutable                                   |
| **Creation**         | `new ArrayList<>()`             | `Optional.of()`, `Optional.empty()`         |
| **Common Methods**   | `.add()`, `.remove()`, `.get()` | `.isPresent()`, `.orElse()`, `.ifPresent()` |
| **Java 8+ Feature**  | Pre-Java 8                      | Introduced in Java 8                        |
| **Typical Use Case** | Collection storage              | Avoiding null checks                        |
| **Stream Support**   | `.stream()` directly            | Treated as stream with `.stream()`          |
| **Performance**      | Higher memory overhead          | Lightweight wrapper                         |

### Response Containers

1. **ResponseEntity<T>**
   
   - Full control over HTTP response
   - Set status codes, headers, body
   - Example:
     
     ```java
     return ResponseEntity.ok(word);
     return ResponseEntity.notFound().build();
     return ResponseEntity.status(HttpStatus.CREATED).body(word);
     ```

2. **Optional<T>**
   
   - Prevent null pointer exceptions
   - Avoid explicit null checks
   - Example:
     
     ```java
     Optional<Word> word = repository.findById(id);
     return word.orElseThrow(() -> new ResourceNotFoundException());
     ```

3. **Page<T>**
   
   - Pagination support
   - Metadata about result set
   - Example:
     
     ```java
     Page<Word> words = repository.findAll(PageRequest.of(0, 10));
     ```

4. **Mono<T>** and **Flux<T>** (Reactive Programming)
   
   - Asynchronous data streams
   - Non-blocking operations
   - Example:
     
     ```java
     Mono<Word> wordMono = wordRepository.findById(id);
     Flux<Word> wordFlux = wordRepository.findAll();
     ```

5. **Resource<T>** (HATEOAS)
   
   - Include hyperlinks in responses
   - Support for hypermedia-driven APIs
   - Example:
     
     ```java
     Resource<Word> resource = new Resource<>(word);
     resource.add(linkTo(methodOn(WordController.class).getWord(id)).withSelfRel());
     ```

### Key Benefits

- Type safety
- Explicit error handling
- Flexible response management
- Support for modern architectural patterns

## Non-Response

### Data Containers

1. **List<T>**
   
   - Basic collection of elements
   - Dynamic sizing
   - Example: `List<Word> words = new ArrayList<>();`

2. **Set<T>**
   
   - Unique elements
   - No duplicates
   - Example: `Set<String> uniqueWordNames = new HashSet<>();`

3. **Map<K,V>**
   
   - Key-value pairs
   - Fast lookups
   - Example: `Map<String, Word> wordMap = new HashMap<>();`

4. **Stream<T>**
   
   - Functional-style operations
   - Lazy evaluation
   - Example: `words.stream().filter(w -> w.getLevel() > 2)`

5. **CompletableFuture<T>**
   
   - Asynchronous computation
   - Chaining operations
   - Example: `CompletableFuture<Word> wordFuture = CompletableFuture.supplyAsync(() -> createWord());`

6. **Queue<T>**
   
   - First-In-First-Out (FIFO)
   - Task scheduling
   - Example: `Queue<Word> wordQueue = new LinkedList<>();`

### Key Characteristics

- Thread-safety
- Performance optimization
- Flexible data manipulation
- Support for functional programming
