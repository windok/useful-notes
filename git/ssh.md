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

from https://apple.stackexchange.com/questions/48502/how-can-i-permanently-add-my-ssh-private-key-to-keychain-so-it-is-automatically

Step 2 - Configure SSH to always use the keychain

It seems that OSX Sierra removed the convenient behavior of persisting your keys between logins, and the update to ssh no longer uses the keychain by default. Because of this, you will get prompted to enter the passphrase for a key after you upgrade, and again after each restart.

The solution is fairly simple, and is outlined in this github thread comment. Here's how you set it up:

Ensure you've completed Step 1 above to store the key in the keychain.
If you haven't already, create an ~/.ssh/config file. In other words, in the .ssh directory in your home dir, make a file called config.
In that .ssh/config file, add the following lines:

```
Host *
  UseKeychain yes
  AddKeysToAgent yes
  IdentityFile ~/.ssh/id_rsa
Change ~/.ssh/id_rsa to the actual filename of your private key. If you have other private keys in your ~.ssh directory, also add an IdentityFile line for each of them. For example, I have one additional line that reads IdentityFile ~/.ssh/id_ed25519 for a 2nd private key.
```

The UseKeychain yes is the key part, which tells SSH to look in your OSX keychain for the key passphrase.
That's it! Next time you load any ssh connection, it will try the private keys you've specified, and it will look for their passphrase in the OSX keychain. No passphrase typing required.
