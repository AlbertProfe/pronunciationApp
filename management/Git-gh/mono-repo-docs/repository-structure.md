# Project structure

## Why is so relevant the project structure?

- To handle the project: track, debug, mantain, trace, test, etc..

- Scale: keep it simple!

- DDD: decouple

- Stick to native structure

- Tech debt

- reuse code

- create nice markdown documentation: onboarding, collaboration, etc..

## Repository Structure `pronunciationApp`

Your repository structure could look like this:

```bash
root/
 ├── .git/ # Git repository data
 ├── frontend/
 │ ├── (React project files)
 │ ├── package.json
 │ ├── .gitignore
 │ └── README.md
 ├── backend/
 │ ├── (Spring Boot project files)
 │ ├── pom.xml
 │ ├── .gitignore
 │ └── README.md
 ├── PRA/  
 │ ├── resources/ # New resources folder under PRA
 │ │ └── (Resource files for PRA)
 │ └── (Other PRA-related files and folders)
 ├── .gitignore
 └── README.md
```

## Setup Steps

1. Create a new GitHub repository.
2. Clone the repository to your local machine.
3. Create two directories: `frontend` and `backend`.
4. Initialize your React project in the `frontend` directory.
5. Initialize your Spring Boot project in the `backend` directory.
6. Create a `.gitignore` file in the root directory to ignore common files/folders.
7. Create separate `.gitignore` files in both `frontend` and `backend` directories for project-specific ignores.
8. Add a README.md file in the root directory explaining the repository structure and how to run both projects.

## Best Practices

1. Use separate branches for frontend and backend development.
2. Create pull requests for merging changes into the main branch.
3. Use meaningful commit messages for each project.
4. Regularly pull changes from the remote repository to stay updated.
5. Consider using GitHub Actions for CI/CD pipelines for both projects.

## Managing Dependencies

- For the React project, use `npm` or `yarn` to manage dependencies (recorded in `package.json`).
- For the Spring Boot project, use Maven or Gradle to manage dependencies (recorded in `pom.xml` or `build.gradle`).

## Collaboration

- Clearly document how to set up and run both projects in their respective README files.
- Use GitHub Issues to track tasks, bugs, and feature requests for both projects.
- Consider using project boards in GitHub to manage the development process.
