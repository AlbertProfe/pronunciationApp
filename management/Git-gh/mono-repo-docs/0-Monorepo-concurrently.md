# Monorepo exectuing concurrently

To execute a monorepo with React and Spring Boot branches on a local machine using Visual Studio Code for React and IntelliJ IDEA for Spring Boot, follow these steps:

## Repository Setup

1. Create a monorepo with two branches: one for React and one for Spring Boot.
2. Use a package manager like pnpm or yarn to manage dependencies at the root level.

### React Setup (Visual Studio Code)

1. In the React branch, create a new React app using Create React App or Vite.

2. Set up the project structure and install dependencies:
   
   ```bash
   npx create-react-app my-react-app
   cd my-react-app
   npm install
   ```

3. Add a script in the root `package.json` to run the React dev server:
   
   ```json
   "scripts": {
     "start:react": "cd my-react-app && npm start"
   }
   ```

### Spring Boot Setup (IntelliJ IDEA)

1. In the Spring Boot branch, create a new Spring Boot project using Spring Initializr.

2. Set up the project structure and dependencies in `pom.xml` or `build.gradle`.

3. Create a simple REST controller to test the backend.

4. Add a script in the root `package.json` to run the Spring Boot server:
   
   ```json
   "scripts": {
     "start:spring": "./mvnw spring-boot:run"
   }
   ```

5. Add the route to run `"./mvnw spring-boot:run"`
   
   ```json
   "scripts": {
     "start:spring": "cd spring-boot && ./mvnw spring-boot:run"
   }
   ```

### Running Both Services

1. To run both services concurrently, you can use a tool like `concurrently`:
   
   ```bash
   npm install -g concurrently
   ```

2. Add a script in the root `package.json` to start both services:
   
   ```json
   "scripts": {
     "start": "concurrently \"npm run start:react\" \"npm run start:spring\""
   }
   ```

3. Run both services with a single command:
   
   ```bash
   npm run start
   ```

### IDE Configuration

1. Open the React project in Visual Studio Code.
   1. Run `npm install`
2. Open the Spring Boot project in IntelliJ IDEA.
   1. Configure IntelliJ IDEA to run the Spring Boot application.

## Four Approaches for Concurrent Development

Summary of Four Approaches for Concurrent Development 

| Approach     | Description                              | Pros                                                                                                           | Cons                                                                                                   | Best For                                               |
| ------------ | ---------------------------------------- | -------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------ |
| Same Branch  | Work on both projects in same branch     | - Simple setup<br>- Direct master branch work                                                                  | - Frequent merging required<br>- Potential conflicts<br>- Manual synchronization                       | Small projects with minimal concurrent changes         |
| Checkout     | Modify package.json to checkout branches | - Quick switching between branches                                                                             | - Risky branch modifications<br>- Potential unexpected behaviors<br>- Assumes branches always runnable | Temporary or experimental setups                       |
| Git Worktree | Create separate worktrees for branches   | - Safe branch management<br>- No working directory modifications<br>- Easy updates<br>- Concurrent development | - Slightly more complex setup<br>- Requires additional Git knowledge                                   | Medium to large projects with multiple active branches |
| Mock API     | Use MockAPI.io to simulate APIs          | - Independent frontend development<br>- Easy API endpoint creation<br>- Supports various scenarios             | - Not real backend<br>- Requires manual API response management                                        | Prototyping, frontend-first development, testing       |
