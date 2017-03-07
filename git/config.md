#Setting up git before use#

```
git config --global color.ui true
git config --global core.autocrlf input
git config --global push.default simple
git config --global core.excludesfile ~/.gitignore_global
git config --global user.name "windok"
git config --global user.email your.address@xample.com
```

```
subl ~/.gitconfig
# or
atom ~/.gitconfig
```

```
[color]
    ui = true
[core]
    autocrlf = input
    excludesfile = /home/ykuznets/.gitignore_global
[push]
    default = simple
[user]
    name = ****
    email = ****
[alias]
    st = status
    cp = cherry-pick
    ci = commit
    co = checkout
    br = branch
    arp = !git add --all && git reset --hard && git pull
    arpr = !git add --all && git reset --hard && git pull --rebase
    ac = !git add --all && git commit
    acm = !git add --all && git commit -m
    all = !git add --all
    sup = !git submodule update
    prs = !git pull --rebase && git submodule update
    rs = !git rebase && git submodule update
```
