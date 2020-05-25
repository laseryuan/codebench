Docker Multi-Architecture Images

Works for both amd64 (Ubuntu) and arm32v6 (Rapsberry Pi)

# Usage
```
docker run --rm lasery/python
```

# Development
```
cd ~/projects/codebench/python
```

## Start the program
Development
```
  -v /usr/bin/qemu-arm-static:/usr/bin/qemu-arm-static `# Cross run` \
```

```
docker run --name=python --rm \
  -it \
  python \
  bash
```

## Build image
```
append "skip" to skip compile bake and dockerfiles
utils/build.py docker
utils/build.py push
utils/build.py deploy
```

# Issues

