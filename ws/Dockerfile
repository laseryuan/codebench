# https://github.com/lewoudar/ws/blob/main/CONTRIBUTING.md
FROM lasery/devpy

USER 1000
ENV HOME=/tmp
RUN \
    curl -sSL https://install.python-poetry.org | python3 - && \
    pip install --user --upgrade nox pre-commit

ENV PATH="$PATH:/tmp/.local/bin"

COPY --chown=1000 ws /tmp/data/ws

WORKDIR /tmp/data/ws/
RUN \
    poetry install && \
    pre-commit install

# docker build -t lasery/ws .
