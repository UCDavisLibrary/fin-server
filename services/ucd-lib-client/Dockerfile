FROM node:8

ADD index.js /service/
ADD package.json /service/
ADD package-lock.json /service/
ADD config.js /service/
ADD client /service/client
ADD controllers /service/controllers
ADD lib /service/lib
ADD models /service/models
ADD gitinfo.json /service/

RUN cd /service && npm install --production && npm dedupe

CMD node service