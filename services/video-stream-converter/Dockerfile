FROM node:10

# manual install of 0.8.0 MP4Box
RUN apt-get update && apt-get install -y wget zip
RUN mkdir /gpac
WORKDIR /gpac
RUN wget https://github.com/gpac/gpac/archive/v0.8.0.zip
RUN unzip v0.8.0.zip
RUN rm v0.8.0.zip
WORKDIR /gpac/gpac-0.8.0
RUN ./configure --static-mp4box --use-zlib=no
RUN make -j4

RUN apt-get install -y ffmpeg

WORKDIR /
RUN mkdir /service
ADD package.json /service/
ADD package-lock.json /service/
RUN cd /service && npm install --production

ADD index.js /service/
ADD lib /service/lib

CMD node service