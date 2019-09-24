FROM node:10

# manual install of 0.8.0 MP4Box
# RUN apt-get update && apt-get install -y wget zip
# RUN mkdir /gpac
# WORKDIR /gpac
# RUN wget https://github.com/gpac/gpac/archive/v0.8.0.zip
# RUN unzip v0.8.0.zip
# RUN rm v0.8.0.zip
# WORKDIR /gpac/gpac-0.8.0
# RUN ./configure --static-mp4box --use-zlib=no
# RUN make -j4

RUN wget https://johnvansickle.com/ffmpeg/releases/ffmpeg-release-amd64-static.tar.xz
#RUN md5sum -c ffmpeg-release-amd64-static.tar.xz.md5
RUN tar xvf ffmpeg-release-amd64-static.tar.xz
RUN mv ffmpeg-4.2.1-amd64-static/ffmpeg /usr/local/bin
RUN rm -rf ffmpeg-release-amd64-static.tar.xz ffmpeg-4.2.1-amd64-static

# RUN apt-get update
# RUN apt-get install -y software-properties-common
# RUN add-apt-repository ppa:jonathonf/ffmpeg-4
# RUN apt-get update; exit 0
# RUN apt-get install -y ffmpeg

WORKDIR /
RUN mkdir /service
ADD package.json /service/
ADD package-lock.json /service/
RUN cd /service && npm install --production

ADD index.js /service/
ADD lib /service/lib

CMD node service