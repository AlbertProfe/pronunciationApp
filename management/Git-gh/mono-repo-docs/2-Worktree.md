# Worktree

## Git command

> Git worktree is a feature that allows you to have multiple working trees associated with a single Git repository

Git worktree is particularly useful when you need to work on multiple branches concurrently without frequent branch switching, allowing for more efficient and organized development processes.

1. **Creating Worktrees**: Use `git worktree add <path> <branch>` to create a new working directory.

2. **Listing Worktrees**: `git worktree list` shows all active worktrees associated with your repository.

3. **Removing Worktrees**: `git worktree remove <path>` deletes the worktree directory and cleans up related references.

Common Use Cases

- Working on multiple features simultaneously
- Creating quick hotfixes
- Testing and experimentation
- Facilitating code reviews

Best Practices

- Use clear and descriptive directory names for worktrees
- Regularly prune unnecessary worktrees to maintain a clean workspace

## Worktree and concurrent execution

> To run both projects from the master branch without switching branches would be to use Git worktrees. 

Here's how you could set it up:

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

4. Run `npm run update-worktrees` to update the worktrees before starting your development session.

5. Use `npm start` to run both projects concurrently.

This approach allows you to run the latest code from both branches without switching branches or modifying your working directory. It's safer and more maintainable than the previous method.

### Updating Worktree

```json
 "update-worktrees": "git worktree remove ../frontend-worktree || true && git worktree remove ../backend-worktree || true && git worktree add ../frontend-worktree frontend && git worktree add ../backend-worktree backend"
  }
```

This line is a <mark>script command</mark> that manages Git worktrees for a monorepo project with frontend and backend components:

1. `git worktree remove ../frontend-worktree || true`: Attempts to remove the existing frontend worktree. The `|| true` ensures the script continues even if the removal fails.

2. `git worktree remove ../backend-worktree || true`: Similarly, tries to remove the existing backend worktree.

3. `git worktree add ../frontend-worktree frontend`: Creates a new worktree for the frontend branch in the `../frontend-worktree` directory.

4. `git worktree add ../backend-worktree backend`: Creates a new worktree for the backend branch in the `../backend-worktree` directory.

This command effectively refreshes the worktrees, ensuring they are up-to-date with the latest code from their respective branches.

### Pull to update

An alternative  to update both worktree directories could be a `pull`: 

>  **Updating Worktrees**: To update a worktree with the latest changes from the remote branch, navigate to the worktree directory and use `git pull`

```json
"update-worktrees": "(cd ../frontend-worktree && git pull) && (cd ../backend-worktree && git pull)"
```

1. Change to the frontend worktree directory and pull the latest changes
2. Change to the backend worktree directory and pull the latest changes

This approach only updates the existing worktrees without attempting to recreate them. It's also safer, as it preserves any local changes in the worktrees while updating them with the latest remote changes.

> The current branches in the worktrees <mark>do not have a remote tracking branch set up</mark>. To fix this, you need to set the upstream branch for both your frontend and backend branches, but first the monorepo needs to be added as remote.

**Add the monorepo as a remote using the absolute path**, for backend-worktree directory:

```bash
cd ../backend-worktree
# Add the monorepo as a remote, using absolute path
git remote add origin /home/albert/MyProjects/Sandbox/monorepo
# Check if git pull works properly
git pull origin backend
```

And for frontend-worktree directory:

```bash
cd ../frontend-worktree
# Check if git pull works properly
git pull origin frontend
```

**Set up upstream tracking information**, you do this in each worktree:

```bash
cd ../frontend-worktree
#In frontend-worktree
git branch --set-upstream-to=origin/frontend frontend

# In backend-worktree
cd ../backend-worktree
git branch --set-upstream-to=origin/backend backend
```

If you do no want to set the upstreams. The key change is in the update-worktrees script where we now explicitly specify:

- `git pull origin frontend` instead of just `git pull` for the frontend-worktree
- `git pull origin backend` instead of just `git pull` for the backend-worktree

This way Git knows exactly which branches to pull from. Try running npm run update-worktrees again after making this change to your package.json.

```json
{
  "scripts": {
    "start:react": "cd ../frontend-worktree/pronunciationAppFront && npm run dev",
    "start:spring": "cd ../backend-worktree/pronunciationAppBack && ./mvnw spring-boot:run",
    "start": "concurrently \"npm run start:react\" \"npm run start:spring\"",
    "update-worktrees": "(cd ../frontend-worktree && git pull origin frontend) && (cd ../backend-worktree && git pull origin backend)"
  }
}
```
