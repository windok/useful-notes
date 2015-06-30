#Generate SSH key#

https://help.github.com/articles/generating-ssh-keys/

Check for existing SSH keys on your computer

```shell
# Lists the files in your .ssh directory, if they exist
ls -al ~/.ssh

# Or use this:
ssh-add -l
```

Creates a new ssh key, using the provided email as a label.  Generating public/private rsa key pair.
```shell
ssh-keygen -t rsa -C "your_email@example.com"
```

Ensure ssh-agent is enabled, start the ssh-agent in the background
```shell
eval "$(ssh-agent -s)"
# Agent pid 59566
```

Add your generated SSH key to the ssh-agent:
```shell
ssh-add ~/.ssh/id_rsa
```

Then copy content of public key and add it to your github or bitbucket account
```
xclip -sel clip < ~/.ssh/id_rsa.pub
```
