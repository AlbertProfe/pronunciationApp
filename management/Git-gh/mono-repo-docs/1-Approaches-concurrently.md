# Approaches Cuncurrently

## Same branch

Working both projects same branch: `develop-spring-react` or` master`

When you run `npm run start` from the master branch, it will execute the versions of the projects that are currently checked out in the master branch. To run the latest developed versions, you need to:

1. Merge the frontend branch into master for React changes.
2. Merge the backend branch into master for Spring Boot changes.
3. Then run `npm run start` from the updated master branch.

## Checkout

Modifying your root package.json script to checkout the specific branches before running each project:

j

```json
{
  "scripts": {
    "start:react": "git checkout frontend && cd pronunciationAppFront && npm start",
    "start:spring": "git checkout backend && cd pronunciationAppBack && ./mvnw spring-boot:run",
    "start": "concurrently \"npm run start:react\" \"npm run start:spring\""
  }
}
```

This approach is indeed risky and not recommended for several reasons:

1. It modifies the working directory, which can lead to unexpected behavior.
2. It assumes that the branches are always in a runnable state.
3. It can cause conflicts if there are uncommitted changes.

## Worktree

A safer approach to run both projects from the master branch without switching branches would be to use Git worktrees. Here's how you could set it up:

1. Create worktrees for each branch:

```bash
git worktree add ../frontend-worktree frontend
git worktree add ../backend-worktree backend
```

2. Navigate to the React project directory and Install the project dependencies, including Vite::
   
   ```bash
   cd ../frontend-worktree/pronunciationAppFront
   npm install
   npm install -g vite
   ```

3. Modify your package.json scripts:

```json
{
  "scripts": {
    "start:react": "cd ../frontend-worktree/pronunciationAppFront && npm run dev",
    "start:spring": "cd ../backend-worktree/pronunciationAppBack && ./mvnw spring-boot:run",
    "start": "concurrently \"npm run start:react\" \"npm run start:spring\"",
    "update-worktrees": "git worktree remove ../frontend-worktree || true && git worktree remove ../backend-worktree || true && git worktree add ../frontend-worktree frontend && git worktree add ../backend-worktree backend"
  }
```

3. Run `npm run update-worktrees` to update the worktrees before starting your development session.

4. Use `npm start` to run both projects concurrently.

This approach allows you to run the latest code from both branches without switching branches or modifying your working directory. It's safer and more maintainable than the previous method.

## Mock api

[Lab#RE03-3: API Rest Mono – albertprofe wiki](https://albertprofe.dev/reactjs/rjslab3-3.html)

> `MockAPI.io` is a web service that allows developers **to create and simulate RESTful APIs for testing and development purposes.**

With `MockAPI.io`, developers can easily generate custom API endpoints and define the responses they want to receive when those endpoints are called. It provides a user-friendly interface to create, manage, and configure mock APIs, making it simple to simulate different scenarios and test how an application interacts with an API.

`MockAPI.io` supports various HTTP methods, request headers, query parameters, and response types, allowing developers to mimic real API behavior. It’s a valuable tool for rapid prototyping, integration testing, and mocking data during development.
