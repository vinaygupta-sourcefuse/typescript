git add <file-name> // add to staging area
// learn below git remote, restore, reset, revert, log --oneline, stash    




$ git remote -v     // check upstream
origin  https://github.com/vinaygupta-sourcefuse/typescript.git (fetch)
origin  https://github.com/vinaygupta-sourcefuse/typescript.git (push)

$ git status
On branch main
Your branch is up to date with 'origin/main'.

Changes not staged for commit:
  (use "git add <file>..." to update what will be committed)
  (use "git restore <file>..." to discard changes in working directory)
        modified:   test.js
        modified:   test.ts

Untracked files:
  (use "git add <file>..." to include in what will be committed)
        notes.ts

no changes added to commit (use "git add" and/or "git commit -a")

$ git add .
$ git status
On branch main
Your branch is up to date with 'origin/main'.

Changes to be committed:
  (use "git restore --staged <file>..." to unstage)
        new file:   notes.ts
        modified:   test.js
        modified:   test.ts

$ git restore .        // it will not work here in this case 
$ git status
On branch main
Your branch is up to date with 'origin/main'.

Changes to be committed:
  (use "git restore --staged <file>..." to unstage)
        new file:   notes.ts
        modified:   test.js
        modified:   test.ts

$ git reset .                  // remove all files from the staging area
Unstaged changes after reset:
M       test.js
M       test.ts

$ git status
On branch main
Your branch is up to date with 'origin/main'.

Changes not staged for commit:
  (use "git add <file>..." to update what will be committed)
  (use "git restore <file>..." to discard changes in working directory)
        modified:   test.js
        modified:   test.ts

Untracked files:
  (use "git add <file>..." to include in what will be committed)
        notes.ts

no changes added to commit (use "git add" and/or "git commit -a")


$ git restore .                 // remove all changes from the working directory
$ git status
On branch main
Your branch is up to date with 'origin/main'.

Untracked files:
  (use "git add <file>..." to include in what will be committed)
        notes.ts

nothing added to commit but untracked files present (use "git add" to track)

$ git add .
$ git status
On branch main
Your branch is up to date with 'origin/main'.

Changes to be committed:
  (use "git restore --staged <file>..." to unstage)
        new file:   notes.ts
        modified:   test.js

$ git reset .
Unstaged changes after reset:
M       test.js
$ git status
On branch main
Your branch is up to date with 'origin/main'.

Changes not staged for commit:
  (use "git add <file>..." to update what will be committed)
  (use "git restore <file>..." to discard changes in working directory)
        modified:   test.js

Untracked files:
  (use "git add <file>..." to include in what will be committed)
        notes.ts

no changes added to commit (use "git add" and/or "git commit -a")
$ git restore .
$ git add .
vinay.gupta@Vinay-SFIN1691:~/Documents/typescript$ git commit -m "notes added"
[main b5206d4] notes added
 1 file changed, 18 insertions(+)
 create mode 100644 notes.ts
vinay.gupta@Vinay-SFIN1691:~/Documents/typescript$ git log --oneline
b5206d4 (HEAD -> main) notes added
69aa638 (origin/main) type security with interface
9cf3c59 first program in ts

$ git revert HEAD
error: Your local changes to the following files would be overwritten by merge:
        notes.ts
Please commit your changes or stash them before you merge.
Aborting
fatal: revert failed

$ git stash
Saved working directory and index state WIP on main: b5206d4 notes added

$ git revert HEAD
[main 6d474d2] Revert "notes added"
 1 file changed, 18 deletions(-)
 delete mode 100644 notes.ts

$ git log --oneline
6d474d2 (HEAD -> main) Revert "notes added"
b5206d4 notes added
69aa638 (origin/main) type security with interface
9cf3c59 first program in ts
