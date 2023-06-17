```
docker build -t lasery/lopkn .
docker rm lopkn
docker_run \
    --rm \
    --name lopkn \
    --docker "--privileged -v /dev:/dev -v /etc/shadow:/etc/shadow:ro" \
    --display \
    lasery/lopkn bash
--debug \

cd project-10/CProject/keyReader/

g++ -c test.cpp $(pkg-config --libs --cflags cairo) -lX11
g++ test.o -o sfml-app -lsfml-graphics -lsfml-window -lsfml-system \
-pthread \
-lX11 -lXfixes $(pkg-config --libs --cflags cairo)
sudo ./sfml-app
```

## REPL
- cling
```
cling \
  -I ./include \
  -L /usr/lib

.L hello.cpp
hello()
.q
```

## build
```
clang++ -I ./include -std=c++11 hello.cpp -o bin/hello
bin/hello
```

- inspector
https://github.com/inspector-repl/inspector

prepare
```
ln -s /opt/cling/include/cling ./
ln -s /tmp/inspector/include ../
```

let program connect to repl (in another session)
```
inspector repl
```

prebuild & build
```
inspector prebuild test-inspector.cpp
clang++ -o test-proc $(inspector print-cflags) test-inspector.cpp
```

connect
```
./test-proc
```

## issue
inspector raise error when run "inspector repl" in the same directory as the
prebuild cpp file
