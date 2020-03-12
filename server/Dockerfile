FROM node:12

RUN apt-get update
RUN apt-get install -y git jq zip unzip
RUN apt-get clean

RUN mkdir app

ADD package.json /app/
ADD package-lock.json /app/
RUN cd /app && npm install --production

ADD controllers /app/controllers
ADD lib /app/lib
ADD models /app/models
ADD assets /app/assets
ADD index.js /app/
ADD gitinfo.json /app/

COPY default-frames /etc/fin/frames

CMD cd /app && node index.js