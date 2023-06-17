setup
```
docker_run lasery/devcpp bash -l
ln -s /opt/cling/include/cling ./
export PYTHONPATH=/tmp/clang/bindings/python
```

# development
build
```
cd inspector/build
    cd inspector
    mkdir build
    cd build

cmake -DCMAKE_PREFIX_PATH="../inst" ..
cmake --build .
```

let program connect to repl (in another session)
```
./inspector repl
```

prebuild & build
```
./inspector prebuild ../test/test.cpp
clang++ -o test-proc $(./inspector print-cflags) -std=c++11  ../test/test.cpp
```

connect
```
./test-proc
```
