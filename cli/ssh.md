Check for existing SSH keys on your computer

```shell

ls -al ~/.ssh
# Lists the files in your .ssh directory, if they exist

# Or use this:
ssh-add -l

```


```shell

ssh-keygen -t rsa -C "your_email@example.com"
# Creates a new ssh key, using the provided email as a label
# Generating public/private rsa key pair.

```

Ensure ssh-agent is enabled:

```shell

# start the ssh-agent in the background
eval "$(ssh-agent -s)"
# Agent pid 59566

```

Add your generated SSH key to the ssh-agent:

```shell

ssh-add ~/.ssh/id_rsa

```


Test github ssh

```shell

ssh -T git@github.com

```
