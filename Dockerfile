FROM debian:stretch

MAINTAINER Elaad FURREEDAN <elaad.f@gmail.com>

ENV DEBIAN_FRONTEND noninteractive
ENV VIRTUAL_ENV /home/env

#COPY premierlangage /home/docker/premierlangage

WORKDIR /home/docker/premierlangage

RUN apt-get update
RUN apt-get install -y --no-install-recommends \
    apt-utils \
    sudo \
    locales \
    wget \
    build-essential \
    libssl-dev \
    openssl \
    python3-venv \
    zip \
    rsyslog \
    libmagic-dev
    
# Installing pip3
RUN wget "https://bootstrap.pypa.io/get-pip.py" && \
    python3 get-pip.py 

# Installing Git from source
RUN apt-get install -y --no-install-recommends git

# Redirecting rsyslog to the right location
RUN echo 'local7.* /var/log/django.log'  >> /etc/rsyslog.d/200-pl.conf
RUN echo '$EscapeControlCharactersOnReceive off' >> /etc/rsyslog.d/200-pl.conf
RUN echo '& stop' >> /etc/rsyslog.d/200-pl.conf

# Configure encoding in locale for documentation
ENV LANG en_US.UTF-8  
ENV LANGUAGE en_US:en  
ENV LC_ALL en_US.UTF-8 
ENV LC_TYPE en_US.UTF-8
RUN echo "en_US.UTF-8 UTF-8" >> /etc/locale.gen
RUN locale-gen "en_US.UTF-8" &&\
    dpkg-reconfigure locales
