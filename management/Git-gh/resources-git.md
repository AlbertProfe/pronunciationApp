# Resources Git

## Official Git

- [Git Reference Manual](https://git-scm.com/)

- [Git - Documentation](https://git-scm.com/doc)

- [Git Book Pro](https://git-scm.com/book/en/v2)

## Others

- [GitHub - juliandross/hello-git-1](https://github.com/juliandross/hello-git-1?tab=readme-ov-file)

- https://learngitbranching.js.org/

- [Git – albertprofe wiki](https://albertprofe.dev/devops/devops-vc-git.html)

- [How to Get Started with GIT and work with GIT Remote Repo](https://www3.ntu.edu.sg/home/ehchua/programming/howto/Git_HowTo.html)

## Books

- [Aprendiendo Git](https://leanpub.com/aprendiendo-git)

- [Getting GitOps: A practical platform with OpenShift](https://developers.redhat.com/e-books/getting-gitops-practical-platform-openshift-argo-cd-and-tekton)

## Video

- [What is Git - A Quick Introduction to the Git Version Control System - YouTube](https://youtu.be/OqmSzXDrJBk?feature=shared)

## Cheatsheet

- [git_init.md · GitHub](https://gist.github.com/AlbertProfe/b05e8198f02b311d18e7c4a86c5241e0)

> This bash script initializes a **new Git repository,** configures the user's name and email, creates a public `GitHub` repository named "AssistantAI", sets up the remote origin, stages all files, commits them with the message "first commit", and pushes the changes to the master branch on `GitHub`.

The script demonstrates the essential steps for setting up a <mark>new Git project</mark> and linking it to a `GitHub` repository, showcasing fundamental Git and `GitHub` CLI commands for version control and remote repository management.

Citations:
[1] https://github.com/AlbertProfe/AssistantAI.git

```bash
git init
git config user.name "albertprofe"
git config user.email "albert@gmail.com"
gh repo create AssistantAI --public
git remote add origin https://github.com/AlbertProfe/AssistantAI.git
git add .
git commit -m "first commit"
git push -u origin master
```

After initializing a Git repository and configuring user details, you should not use `git init` or `git config` again in the same project. The next steps in a typical Git workflow would be:

1. Make changes to your files and `stage` them:
   
   ```bash
   git add .
   ```
   
   This stages all modified files in the current directory[6].

2. `Commit` your changes with a descriptive message:
   
   ```bash
   git commit -m "Add new hook to handle api rest call"
   ```
   
   `Commit` messages should explain why the change was made, not just what was done[2].

3. `Push` your branch to the remote repository:
   
   ```bash
   git push
   ```
   
   This uploads your local branch to the remote repository for review or backup[2].

Or more complete workflow, creating a new feataure in a new branch and merging it:

1. Create a **new branch** for your feature or issue:
   
   ```bash
   git checkout -b feature/new-feature
   ```
   
   This creates and switches to a new branch named "feature/new-feature" based on the current branch[3].

2. Make changes to your files and `stage` them:
   
   ```bash
   git add .
   ```
   
   This stages all modified files in the current directory[6].

3. `Commit` your changes with a descriptive message:
   
   ```bash
   git commit -m "Add new feature to handle user input"
   ```
   
   `Commit` messages should explain why the change was made, not just what was done[2].

4. `Push` your branch to the remote repository:
   
   ```bash
   git push origin feature/new-feature
   ```
   
   This uploads your local branch to the remote repository for review or backup[2].

5. When ready to `merge`, create a `pull request` for code review[2].

6. After approval, `merge` the feature branch into the `master` branch:
   
   ```bash
   git checkout master
   git merge feature/new-feature
   ```

Remember to `pull` the latest changes from the `master` branch before starting a new feature to ensure you're working with the most up-to-date code[5].

Citations:
[1] https://www.theserverside.com/blog/Coffee-Talk-Java-News-Stories-and-Opinions/init-Gitflow-example-workflow-tutorial
[2] https://dev.to/ajmal_hasan/beginner-friendly-git-workflow-for-developers-2g3g
[3] https://www.atlassian.com/git/tutorials/comparing-workflows/feature-branch-workflow
[4] https://www.chucksacademy.com/en/topic/git-branching/initial-setup-basic-workflow
[5] https://stackoverflow.com/questions/48387643/setup-and-workflow-when-developing-using-a-github-repo-as-initial-codebase
[6] https://www.reddit.com/r/git/comments/166t4oh/calling_all_git_experts_what_is_the_proper_git/
[7] https://gist.github.com/blackfalcon/8428401

## Git Repository Management Scripts

- [Git Repository Management Scripts](https://gist.github.com/AlbertProfe/262beaa9b9965df80241049923a77dee#git-repository-management-scripts)

This set of scripts help students practice and understand key `Git` and `GitHub` concepts. The scripts cover the entire **lifecycle of a repository**, from creation to deletion, including branching and committing.

They provide **hands-on experience with**:

- Initializing local and remote repositories
- Configuring Git settings
- Adding and committing files
- Creating and switching branches
- Pushing changes to GitHub
- Deleting repositories
- Managing GitHub permissions

## Authomate Sync to Local

- [Authomate Sync to Local](https://gist.github.com/AlbertProfe/4f9d89ffe14beb62d166730929070e9a)