FROM python:3.7

#Install git
RUN apt-get update
RUN apt-get install -y git

ARG PL_FOLDER=./
ENV PL_HOME=/usr/src/app

#Set working directory
WORKDIR ${PL_HOME}

# Clone the conf files into the docker container    
RUN git clone https://github.com/PremierLangage/premierlangage/tree/premierlanguagedocker  ${PL_HOME}   

RUN rm -f CONTAINER_ALREADY_STARTED_PLACEHOLDER

RUN mkdir -p home/Yggdrasil \
  && mkdir -p media

ADD             ./install_docker.sh /opt/sh/
RUN             chmod +x /opt/sh/install_docker.sh
ENTRYPOINT      ["/opt/sh/install_docker.sh"]



