FROM debian:latest
MAINTAINER Quinn Hart "qjhart@ucdavis.edu"

ENV VERSION=4.0.4

#RUN apk update && apk add wget g++ make autoconf automake file
RUN apt-get update && apt-get install -y wget g++ make autoconf automake file

RUN wget --no-check-certificate https://github.com/JoeDog/siege/archive/v${VERSION}.tar.gz &&\
		tar -xzf v${VERSION}.tar.gz

RUN cd siege-${VERSION} \
    && utils/bootstrap && ./configure \
    && make install

ENTRYPOINT ["siege"]
CMD ["--help"]
