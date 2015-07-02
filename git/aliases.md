#Some convinient aliases for git#

```
git config --global alias.st status
git config --global alias.ci commit
git config --global alias.co checkout
git config --global alias.br branch
```

```
subl ~/.gitconfig
```
add to alias group :
```
	arp = !git add --all && git reset --hard && git pull
	arpr = !git add --all && git reset --hard && git pull --rebase
	ac = !git add --all && git commit
	acm = !git add --all && git commit -m
```

