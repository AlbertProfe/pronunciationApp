# JPA

- [Spring Boot: Data &amp; DB – albertprofe wiki](https://albertprofe.dev/springboot/boot-concepts-data.html)

- [Spring Boot: JPA &amp; DI – albertprofe wiki](https://albertprofe.dev/springboot/boot-concepts-jpa.html)

- [Spring Boot: JPA Mappings – albertprofe wiki](https://albertprofe.dev/springboot/boot-concepts-jpa-2.html)

- [Spring Boot: JPA Relationships – albertprofe wiki](https://albertprofe.dev/springboot/boot-concepts-jpa-3.html)

- [Spring Boot: JPA Queries – albertprofe wiki](https://albertprofe.dev/springboot/boot-concepts-jpa-4.html)

- [Spring Boot: JPA Inherence – albertprofe wiki](https://albertprofe.dev/springboot/boot-concepts-jpa-5.html)

- [Spring Boot: Scaling – albertprofe wiki](https://albertprofe.dev/springboot/boot-concepts-scaling.html)

## Summary

JPA stands for `Java Persistence API`.

It is a Java specification for **managing, persisting, and accessing relational data** in Java applications.

JPA is a **standard API for ORM (Object-Relational Mapping)** and provides a way to map Java objects to relational databases

## Spring Boot DAL/DAO

**ORM (Object-Relational Mapping)**

> ORM is the concept of mapping object-oriented domain models to relational database tables. JPA and Hibernate are examples of ORM frameworks.

```bash
App
└── Spring Data JPA
 └── JPA (Java Persistence API)
 └── Hibernate
 └── JDBC (Java Database Connectivity)
 └── Relational Database
```

**Application Layer**

At the top, we have the application code that needs to interact with data.

**Repository (Spring Data JPA)**

Spring Data JPA provides a high-level abstraction for data access. It simplifies database operations by allowing developers to define interfaces that extend JpaRepository. For example:

```java
public interface UserRepository extends JpaRepository<User, Long> {
    List<User> findByLastName(String lastName);
}
```

This interface automatically generates methods for common database operations.

**JPA (Java Persistence API)**

<mark>JPA is a specification that defines how to persist data in Java applications</mark>. 

**It's not an implementation**, but a set of interfaces and annotations that describe how to map Java objects to database tables. For example:

```java
@Entity
public class User {
    @Id
    private Long id;
    private String firstName;
    private String lastName;
}
```

**Hibernate**

<mark>Hibernate is a popular implementation of JPA.</mark>

 It provides the actual code that performs the object-relational mapping (ORM) based on JPA specifications. Hibernate translates JPA annotations and method calls into SQL queries.

**JDBC (Java Database Connectivity)**

<mark>JDBC is a low-level API for connecting Java applications to databases</mark>. 

It provides a set of Java classes and interfaces that send SQL statements to the database and process the results. Hibernate uses JDBC under the hood to communicate with the database.

**Database**

At the bottom is the actual database system, such as MySQL, PostgreSQL, or Oracle.

## DAL/DAO for a 5yo

Imagine you're building a house:

- The **Application** is like the entire house.
- The **Repository** is like a smart assistant that helps you organize and find things in the house.
- **JPA** is like a blueprint that describes how rooms should be organized.
- **Hibernate** is the construction team that builds the rooms according to the blueprint.
- **JDBC** is like the basic tools (hammers, nails) the construction team uses.
- The **Database** is the foundation and structure of the house.
- **ORM** is the process of arranging the rooms to match how you want to use them.

## Vendors and Context

These technologies work together to simplify database operations in Java applications, from low-level database connections (JDBC) to high-level abstractions (Spring Data JPA)

- JPA: Specification by Oracle (formerly Sun Microsystems)
- Hibernate: Open-source project maintained by Red Hat
- JDBC: Part of the Java Standard Edition (SE) platform
- Spring Data JPA: Part of the Spring Framework ecosystem
- Database vendors: MySQL (Oracle), PostgreSQL (open-source), Oracle Database, Microsoft SQL Server

## CrudRepository vs. JpaRepository

[In Spring Boot what is the difference between CrudRepository and JpaRepository in extending a Java repository interface - Stack Overflow](https://stackoverflow.com/questions/72058502/in-spring-boot-what-is-the-difference-between-crudrepository-and-jparepository-i)

| CrudRepository                                                                                         | JpaRepository                                                                                                                                     |
| ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------- |
| CrudRepository does not provide any method for pagination and sorting.                                 | JpaRepository extends PagingAndSortingRepository. It provides all the methods for implementing the pagination.                                    |
| It works as a **marker** interface.                                                                    | JpaRepository extends both **CrudRepository** and **PagingAndSortingRepository**.                                                                 |
| It provides CRUD function only. For example **findById(), findAll(),** etc.                            | It provides some extra methods along with the method of PagingAndSortingRepository and CrudRepository. For example, **flush(), deleteInBatch().** |
| It is used when we do not need the functions provided by JpaRepository and PagingAndSortingRepository. | It is used when we want to implement pagination and sorting functionality in an application.                                                      |
