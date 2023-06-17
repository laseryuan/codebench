FROM lasery/devcpp

RUN apt-get update && apt-get install -y \
    libsfml-dev \
    libxext-dev \
    libxfixes-dev \
    libcairo2-dev
RUN apt-get install -y sudo
RUN apt-get install -y x11-apps

RUN echo 'laser ALL=(ALL) NOPASSWD:ALL' >> /etc/sudoers

# RUN echo "laser ALL=(ALL) NOPASSWD:ALL" > /etc/sudoers.d/laser
# RUN echo 'Defaults    env_keep += "HOME"' >> /etc/sudoers.d/laser
# -I /usr/include/gsl
# /usr/lib/x86_64-linux-gnu/libgsl.so
# /usr/lib/x86_64-linux-gnu/libgslcblas.so

