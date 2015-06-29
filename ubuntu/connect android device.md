http://askubuntu.com/questions/511806/mtp-with-android-phone-unreliable-on-14-04

Uncomment #user_allow_other in ```/etc/fuse.conf```.

Run ```lsusb``` and see your device's vendor ID. It will be something like 1d6b:0002.


Add the following line to ```/lib/udev/rules.d/69-libmtp.rules```.

```
ATTR{idVendor}=="1d6b", ATTR{idProduct}=="0002", SYMLINK+="libmtp-%k", ENV{ID_MTP_DEVICE}="1", ENV{ID_MEDIA_PLAYER}="1"
```

I add for Lg L Bello:

```
# LG Electronics Inc. LG L BELLO Mobile Phone
ATTR{idVendor}=="1004", ATTR{idProduct}=="631e", SYMLINK+="libmtp-%k", MODE="660", GROUP="audio", ENV{ID_MTP_DEVICE}="1", ENV{ID_MEDIA_PLAYER}="1"
```


Add the following line to /etc/udev/rules.d/51-android.rules. (There was not such file to edit but it still works just fine)

```
ATTR{idVendor}=="1d6b", ATTR{idProduct}=="0002", MODE=”0666"
```

```
sudo service udev restart

sudo reboot
```
