docker_run devcpp:amd64 bash -l
ln -s /opt/cling/include/cling ./
ln -s /tmp/inspector/include ../

cat test.cpp
inspector prebuild test.cpp

clang++ -o test-proc $(inspector print-cflags) -std=c++11 test.cpp
inspector repl

# let program connect to repl (in another session)
./test-proc

# development
export PYTHONPATH=/tmp/clang/bindings/python
ln -s /opt/cling/include/cling ./

cd inspector
mkdir build
cd build
cmake -DCMAKE_PREFIX_PATH="../inst" ..
cmake --build .
./inspector repl
./inspector prebuild ../test/test.cpp
./test-proc
