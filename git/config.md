#Setting up git before use#

Cli commands
```
git config --global color.ui true
git config --global core.autocrlf input
git config --global push.default simple
git config --global core.excludesfile ~/.gitignore_global
git config --global user.name "windok"
git config --global user.email your.address@xample.com
```


Config example:
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
    editor = vi
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

    all = !git add --all
    sup = !git submodule update

    ac = !git all && git commit
    acm = !git all && git commit -m

    prs = !git pull --rebase && git sup
    rs = !git rebase && git sup

    as = !git all && git stash
    asp = !git as && git pull
    asprs = !git as && git prs

    ar = !git all && git reset --hard
    arp = !git ar && git pull
    arprs = !git ar && git prs

    up = "!bash -c 'if [[ $(git st -s) ]]; then git as && git prs && git stash pop; else git prs && git st; fi'"

    hist = log --pretty=format:\"%h %ad | %s%d [%an]\" --graph --date=short
    type = cat-file -t
    dump = cat-file -p

```
