FROM node:12

RUN mkdir /service

COPY package.json /service/package.json
COPY package-lock.json /service/package-lock.json
RUN cd /service && npm install --production && npm dedupe

COPY lib /service/lib
COPY schemas /service/schemas
COPY index.js /service/index.js
COPY reindex.js /service/reindex.js
COPY gitinfo.json /service/gitinfo.json

CMD node service
