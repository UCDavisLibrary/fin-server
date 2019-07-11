FROM node:8

RUN mkdir /service
ADD package.json /service/
ADD package-lock.json /service/
RUN cd /service && npm install --production && npm dedupe

ADD index.js /service/
ADD config.js /service/
ADD client /service/client
ADD controllers /service/controllers
ADD lib /service/lib
ADD models /service/models
ADD gitinfo.json /service/

CMD node service