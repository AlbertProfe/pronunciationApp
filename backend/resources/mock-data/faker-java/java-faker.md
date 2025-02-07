# Java Faker

> **Java Faker is a tool that creates realistic-looking fake data**, including names, addresses, phone numbers, and much more.

- [GitHub - DiUS/java-faker: Brings the popular ruby faker gem to Java](https://github.com/DiUS/java-faker)

It’s useful for:

1. **Populating** databases with test data
2. Creating **mock objects for unit testing**
3. Generating sample data for applications
4. Prototyping user interfaces

The library provides a wide range of pre-defined categories (like name, address, phone number) and methods to generate fake data within those categories. It’s easy to use and can generate data in multiple languages and locales.

For example, you can create a Faker instance and generate fake data like this:

```java
Faker faker = new Faker();
 // Generates a random full name
String name = faker.name().fullName();
// Generates a random email address
String email = faker.internet().emailAddress(); 
```

Dependency for maven:

```xml
<dependency>
    <groupId>com.github.javafaker</groupId>
    <artifactId>javafaker</artifactId>
    <version>1.0.2</version>
</dependency>
```

## Example #1

- [CustomerDataLoader.java at master · AlbertProfe/restaurantManager · GitHub](https://github.com/AlbertProfe/restaurantManager/blob/master/src/main/java/dev/example/restaurantManager/utilities/CustomerDataLoader.java)

- [DataLoader.java at master · AlbertProfe/restaurantManager · GitHub](https://github.com/AlbertProfe/restaurantManager/blob/master/src/main/java/dev/example/restaurantManager/utilities/DataLoader.java)

In this example, it's used to create fake customer data for a <mark>restaurant management system.</mark> Here's how it works:

1. The `CustomerDataLoader` class is annotated with `@Component`, making it a Spring-managed bean[3].

2. It uses `@Autowired` to inject the `CustomerRepository`, which will be used to save the generated data[3].

3. The `createFakeCustomers()` method first checks if the database is empty:

```java
if (customerRepository.count() == 0) {
    // Generate fake data
}
```

4. A new `Faker` instance is created with the US locale:

```java
Faker faker = new Faker(new Locale("en-US"));
```

5. The method then generates 50 fake customers in a loop:

```java
for (int i = 0; i < qty; i++) {
    Customer customer = new Customer(
        UUID.randomUUID().toString(),
        faker.name().fullName(),
        faker.internet().emailAddress(),
        faker.phoneNumber().cellPhone(),
        faker.random().nextInt(18, 130),
        faker.random().nextBoolean(),
        faker.random().nextBoolean()
    );
    customerRepository.save(customer);
}
```

6. For each customer, Java Faker generates:
   
   - A random full name using `faker.name().fullName()`
   - A random email address using `faker.internet().emailAddress()`
   - A random cell phone number using `faker.phoneNumber().cellPhone()`
   - A random age between 18 and 130 using `faker.random().nextInt(18, 130)`
   - Two random boolean values using `faker.random().nextBoolean()`

7. Each generated customer is saved to the database using `customerRepository.save(customer)`[3].

This approach allows the application to populate the database with realistic-looking customer data for testing or development purposes, without the need for manual data entry.

Citations:
[1] https://github.com/AlbertProfe/restaurantManager/tree/master
[2] https://albertprofe.dev/springboot/sblab8-1.html
[3] https://albertprofe.dev/springboot/sblab8-3.html

---

Answer from Perplexity: pplx.ai/share
