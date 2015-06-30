How to mount ntfs disk


Print devices
```
sudo blkid
```

make directory to mount
```
sudo mkdir /general
```

edit mounted devices

```
sudo subl /etc/fstab
```
paste string like this
```
UUID="5EDC3364DC33359D" /general ntfs rw,nls=utf8,gid=plugdev,umask=0002 0 0
```
Then mount all devices specified in ```'etc\fstab```
```
sudo mount -a
```
