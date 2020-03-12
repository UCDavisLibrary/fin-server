FROM node:10

RUN mkdir /service

COPY package.json /service/package.json
COPY package-lock.json /service/package-lock.json
RUN cd /service && npm install --production

COPY lib /service/lib
COPY index.js /service/index.js

CMD node service
