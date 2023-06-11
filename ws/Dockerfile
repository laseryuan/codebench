# https://github.com/lewoudar/ws/blob/main/CONTRIBUTING.md
FROM lasery/devpy

RUN \
    pip install poetry nox pre-commit

COPY ws /tmp/data/ws

WORKDIR /tmp/data/ws/
RUN \
    poetry install && \
    pre-commit install

# docker build -t lasery/ws .
