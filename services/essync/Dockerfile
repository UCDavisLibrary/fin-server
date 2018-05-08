FROM node:8

COPY lib /service/lib
COPY schemas /service/schemas
COPY index.js /service/index.js
COPY reindex.js /service/reindex.js
COPY package.json /service/package.json
COPY package-lock.json /service/package-lock.json

RUN cd /service && npm install --production

CMD node service
