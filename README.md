# PronunciationApp

[![Version](https://img.shields.io/badge/version-0.1.0-blue)](https://github.com/AlbertProfe/pronunciationApp)
[![Dependencies](https://img.shields.io/badge/dependencies-up%20to%20date-brightgreen)](https://github.com/AlbertProfe/pronunciationApp)


`PronunciationApp` is a project designed <mark>to help users improve their English pronunciation using modern web technologies</mark>.

The app has a visually appealing grid of cards, each representing a word to learn and practice[1]. These cards, inspired by Material UI's design, will display the word, its pronunciation, and a brief definition[1].

For example, one card might feature:

**Benevolent**
/bɪˈnɛvələnt/
*adjective*
Well-meaning and kindly

<div align="center" width="30%"> <table> <tr> <td align="center"> <h2>benevolent</h2> <p><i>/bɪˈnɛvələnt/</i></p> <p><strong>adjective</strong></p> <p>Well-meaning and kindly; charitable</p> <hr> <p><em>Example:</em> The benevolent donor gave millions to charity.</p> <p> <a href="#"><img src="https://img.shields.io/badge/🔊-Pronounce-4CAF50" alt="Pronounce"></a> <a href="#"><img src="https://img.shields.io/badge/🎯-Drill-008CBA" alt="Drill"></a> </p> </td> </tr> </table> </div>


Users can interact with these cards in two primary ways:

1. **Pronunciation**: Clicking on the card will trigger an audio playback of the word's correct pronunciation, allowing users to hear and mimic the sound[1].

2. **Drill Mode**: A dedicated button on each card activates a drill feature. This mode might present various exercises, such as:
   - Repeating the word
   - Using it in a sentence
   - Identifying synonyms or antonyms, how the english stress works, stress Patterns, etc ..

The grid layout ensures easy navigation, while the card design provides a clean, focused presentation of each word[1]. This interactive approach combines visual, auditory, and kinesthetic learning methods, catering to different learning styles and enhancing vocabulary retention and pronunciation skills.

Citations:
[1] https://mui.com/material-ui/react-card/

> This application combines a React frontend with a Spring Boot backend, utilizing H2 and PostgreSQL databases, RESTful APIs, and comprehensive testing with Postman, JUnit, and Jest.

![image](https://github.com/user-attachments/assets/50731cd6-2cdf-4594-a62d-7df5f65cde50)

## Project Structure

The project is organized as a <mark>monorepo with three main branches</mark>:

- **frontend-react**:
   - /frontend/pronunciationAppFront: [pronunciationAppFront](https://github.com/AlbertProfe/pronunciationApp/tree/frontend-react/frontend/pronunciationAppFront)
   - /frontend/resources: [resources](https://github.com/AlbertProfe/pronunciationApp/tree/frontend-react/frontend/resources)       
- **backend-spring-boot**:
   - /backend/pronunciationAppBack: [pronunciationAppBack](https://github.com/AlbertProfe/pronunciationApp/tree/backend-spring-boot/backend/pronunciationAppBack)
   - /backend/resources: [resources](https://github.com/AlbertProfe/pronunciationApp/tree/backend-spring-boot/backend/resources)   
- **master**:
   - /management/: [management](https://github.com/AlbertProfe/pronunciationApp/tree/master/management)
   - /PRA/: [PRA](https://github.com/AlbertProfe/pronunciationApp/tree/backend-spring-boot/PRA)

### Directory Layout

**Root**

```
.
├── backend
│   ├── pronunciationAppBack
│   └── resources
├── frontend
│   ├── pronunciationAppFront
│   └── resources
├── management
│   ├── Git-gh
│   ├── installing-add-on-soft-linux
│   ├── Project-Management
│   └── Testing and Mocking
├── PRA
│   └── PRA_guide.md
└── README.md
```
Spring Boot Backend:

```
.
├── HELP.md
├── mvnw
├── mvnw.cmd
├── pom.xml
├── src
│   ├── main
│   │   ├── java
│   │   └── resources
│   └── test
│       └── java
└── target
    ├── classes
    │   ├── application.properties
    │   └── dev
    ├── generated-sources
    │   └── annotations
    ├── generated-test-sources
    │   └── test-annotations
    └── test-classes
        └── dev
```

React Frontend:

```
.
├── eslint.config.js
├── index.html
├── node_modules
│   ├── acorn
|   ...
│   └── yocto-queue
├── package.json
├── package-lock.json
├── public
│   └── vite.svg
├── README.md
├── src
│   ├── App.css
│   ├── App.jsx
│   ├── assets
│   ├── index.css
│   └── main.jsx
└── vite.config.js
```

## Tech Stack

Our project leverages a robust set of technologies and development tools:

Here's the updated table with links for the apps and tools:

| Category | Tools |
|----------|-------|
| Programming Languages & Frameworks | [React](https://reactjs.org/), [Spring Boot](https://spring.io/projects/spring-boot), [Java](https://www.java.com/), [JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript), [Material React UI](https://mui.com/)|
| Version Control | [Git](https://git-scm.com/), [GitHub](https://github.com/), [GitHub Worktree](https://git-scm.com/docs/git-worktree) |
| IDEs & Editors | [Visual Studio Code](https://code.visualstudio.com/), [IntelliJ IDEA](https://www.jetbrains.com/idea/), [MarkText](https://marktext.app/), [Sublime Text](https://www.sublimetext.com/), [Sublime Merge](https://www.sublimemerge.com/) |
| Documentation | [Markdown](https://daringfireball.net/projects/markdown/), [Shields.io](https://shields.io/), [GitHub README](https://docs.github.com/en/repositories/managing-your-repositorys-settings-and-features/customizing-your-repository/about-readmes), [DiagramGPT](https://www.eraser.io/diagramgpt), [Napkin AI](https://www.napkin.ai/) |
| Testing | [Postman](https://www.postman.com/), [JUnit](https://junit.org/junit5/), [Jest](https://jestjs.io/) |
| Databases | [H2 Database](https://www.h2database.com/), [PostgreSQL](https://www.postgresql.org/) |
| Development Tools | [Maven](https://maven.apache.org/), [npm](https://www.npmjs.com/), [Docker](https://www.docker.com/) |
| Cloud & Deployment | [Heroku](https://www.heroku.com/), [AWS](https://aws.amazon.com/), [Netlify](https://www.netlify.com/) |

## Features

- **Frontend**: Built with React for a responsive and interactive user interface
- **Backend**: Powered by Spring Boot for robust server-side operations
- **Databases**: Utilizes H2 for development and PostgreSQL for production
- **API**: RESTful API design for seamless communication between frontend and backend
- **Testing**: Comprehensive testing suite using Postman, JUnit, and Jest

## Version Control

This project uses Git and GitHub for version control, implementing a monorepo structure with worktree. For more information on the monorepo setup and documentation, please refer to the [mono-repo-docs](https://github.com/AlbertProfe/pronunciationApp/tree/master/management/Git-gh/mono-repo-docs).

## Getting Started

1. Clone the repository:
   ```bash
   git clone https://github.com/AlbertProfe/pronunciationApp.git
   ```

2. Navigate to the project directory:
   ```bash
   cd pronunciationApp
   ```

3. Check out the desired branch:
   ```bash
   git checkout [branch-name]
   ```

4. Follow the setup instructions in the respective `frontend` and `backend` directories.

## Contributing

We welcome contributions to the PronunciationApp project. Please read our contributing guidelines before submitting pull requests.

## License

This project is licensed under the [MIT License](LICENSE).

Citations:
[1] https://github.com/AlbertProfe/pronunciationApp/tree/master
[2] https://github.com/AlbertProfe/pronunciationApp/branches
