## Create and Download Spring Boot Project

### Steps to Download

1. Open URL: [create project](https://start.spring.io/#!type=maven-project&language=java&platformVersion=3.3.7&packaging=jar&jvmVersion=17&groupId=dev&artifactId=pronunciationAppBack&name=pronunciationAppBack&description=Spring%20Boot%20for%20app%20pronunciatoin&packageName=dev.pronunciationAppBack&dependencies=web,devtools,lombok,h2,data-jpa,postgresql)
2. Click "<mark>GENERATE</mark>" button to download ZIP

### Project Import in IntelliJ IDEA

```bash
# Extract downloaded ZIP
unzip pronunciationAppBack.zip

# Open IntelliJ IDEA
File > Open > Select extracted project folder
```

### Recommended Import Process

1. Launch IntelliJ IDEA
2. Select "Open" from welcome screen
3. Browse to extracted project directory
4. Click "Open"
5. Wait<mark> for Maven/Gradle to sync dependencies</mark>

### Potential Dependencies Included

- Spring Web
- Spring DevTools
- Lombok
- H2 Database
- Spring Data JPA
- PostgreSQL Driver

### Troubleshooting

- Ensure Java 17 is installed
- Check Maven/Gradle configuration
- Verify internet connection for dependency download
