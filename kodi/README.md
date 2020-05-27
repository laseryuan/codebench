https://kodi.wiki/view/HOW-TO:HelloWorld_addon

Usage
```
  -v $(pwd)/:/home/kodi/.kodi/addons/my-addon/ `# mount the addon; needs to be enabled in kodi config`\
  -v /home/laser/Videos/:/home/kodi/Videos/ `# mount video library`\
  -v kodi-config:/home/kodi/.kodi/userdata `# persist kodi configuration`\

docker run -it --rm --name=kodi \
  --privileged \
  -e DISPLAY=unix:0 -v /tmp/.X11-unix:/tmp/.X11-unix \
  -e PULSE_SERVER=unix:/run/user/1000/pulse/native -v /run/user/1000:/run/user/1000 \
  -v /var/run/dbus/:/var/run/dbus/ \
  lasery/codebench:kodi \
  bash
```

```
cd ~/projects/codebench/kodi

  -v kodi-config:/home/kodi/.kodi/userdata \
  -v $(pwd)/addons/script.hello.world/:/home/kodi/.kodi/addons/script.hello.world/ \

docker run -it --rm --name=kodi \
  --privileged \
  -v /home/laser/Videos/:/home/kodi/Videos/ \
  -e DISPLAY=unix:0 -v /tmp/.X11-unix:/tmp/.X11-unix \
  -e PULSE_SERVER=unix:/run/user/1000/pulse/native -v /run/user/1000:/run/user/1000 \
  -v /var/run/dbus/:/var/run/dbus/ \
  codebench:kodi-amd64 \
  bash
```

## Build image
```
utils/build.py docker
utils/build.py push
```

Force stop kodi
```
kill %
```

Debug
```
ipdb==0.8
```
