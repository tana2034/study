FROM jenkins:latest

USER root

# Jenkins内でdockerが使えるようにインストール
RUN apt-get -y update && \
    apt-get -y install \
    apt-transport-https \
    ca-certificates \
    curl \
    software-properties-common
RUN curl -fsSL https://download.docker.com/linux/ubuntu/gpg | apt-key add -
RUN apt-key fingerprint 0EBFCD88
RUN add-apt-repository "deb [arch=amd64] https://download.docker.com/linux/ubuntu \
    xenial \
    stable"
RUN apt-get -y update
RUN apt-get -y install docker-ce
RUN adduser jenkins docker
RUN service docker start