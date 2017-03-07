## Remote repo ##

### Remove remote branch ###
```bash
git push origin --delete <branch_name>

# remove locally
git branch -d <branch_name>
# or hard delete
git branch -D <branch_name>
```

## Cherry pick ##

### Cherry pick range ###
```bash
git cherry-pick <commit_A>..<commit_B>

# inclusive cherry-pick
git cherry-pick <commit_A>^..<commit_B>
```

### Cherry pick edit message ###
```bash
git cherry-pick --edit <commit>
```
