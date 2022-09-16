# from https://github.com/loris-imageserver/loris-docker/blob/development/Dockerfile
FROM ubuntu:18.04

MAINTAINER eliotj@princeton.edu

ENV LORIS_VERSION=2.3.3
ENV HOME /root

# Update packages and install tools 
RUN apt-get update -y && apt-get install -y wget git unzip

# Install pip and python libs
RUN apt-get install -y python-dev python-setuptools python-pip libffi-dev libssl-dev
RUN pip install --upgrade pip
RUN pip2.7 install Werkzeug
RUN pip2.7 install configobj
RUN apt-get clean

# Install kakadu
WORKDIR /usr/local/lib
RUN wget --no-check-certificate https://github.com/loris-imageserver/loris/raw/development/lib/Linux/x86_64/libkdu_v74R.so \
	&& chmod 755 libkdu_v74R.so

WORKDIR /usr/local/bin
RUN wget --no-check-certificate https://github.com/loris-imageserver/loris/raw/development/bin/Linux/x86_64/kdu_expand \
	&& chmod 755 kdu_expand

RUN ln -s /usr/lib/`uname -i`-linux-gnu/libfreetype.so /usr/lib/ \
	&& ln -s /usr/lib/`uname -i`-linux-gnu/libjpeg.so /usr/lib/ \
	&& ln -s /usr/lib/`uname -i`-linux-gnu/libz.so /usr/lib/ \
	&& ln -s /usr/lib/`uname -i`-linux-gnu/liblcms.so /usr/lib/ \
	&& ln -s /usr/lib/`uname -i`-linux-gnu/libtiff.so /usr/lib/

RUN echo "/usr/local/lib" >> /etc/ld.so.conf && ldconfig

# Install Pillow
RUN apt-get install -y libjpeg8 libjpeg8-dev libfreetype6 libfreetype6-dev zlib1g-dev liblcms2-2 liblcms2-dev liblcms2-utils libtiff5-dev
RUN pip2.7 install Pillow

# Install loris
WORKDIR /opt

# Get loris and unzip. 
RUN wget --no-check-certificate https://github.com/loris-imageserver/loris/archive/v${LORIS_VERSION}.zip
RUN unzip v${LORIS_VERSION}.zip
RUN mv loris-${LORIS_VERSION}/ loris/
RUN rm v${LORIS_VERSION}.zip

RUN useradd -d /var/www/loris -s /sbin/false loris

WORKDIR /opt/loris

# Create image directory
RUN mkdir /usr/local/share/images

# Load example images
RUN cp -R tests/img/* /usr/local/share/images/

RUN ./setup.py install 
COPY loris2.conf etc/loris2.conf

WORKDIR /opt/loris/loris
COPY start.py start.py
RUN mkdir -p /tmp/loris2/tmp

# bind test server to 0.0.0.0
#RUN sed -i -- 's/localhost/0.0.0.0/g' webapp.py
#RUN sed -i 's/app = create_app(debug=True)/app = create_app(debug=False, config_file_path=conf_fp)/g' webapp.py

ARG LORIS_SERVICE_REPO_HASH
ARG LORIS_SERVICE_REPO_TAG
ENV LORIS_SERVICE_REPO_HASH ${LORIS_SERVICE_REPO_HASH}
ENV LORIS_SERVICE_REPO_TAG ${LORIS_SERVICE_REPO_TAG}

EXPOSE 5004
CMD ["python", "start.py"]